import Banner from "@/app/components/Banner";
import Header from "@/app/components/Header";
import SmallCards from "@/app/components/SmallCards";

import fetch from 'node-fetch';
import MediumCards from "@/app/components/MediumCards";
import LargeCard from "@/app/components/LargeCard";


async function fetchExploreData() {
  // Replace with your data fetching logic
  const response = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await response.json();
  // console.log(exploreData); // Log the fetched data
  
  return exploreData;
}

async function fetchLiveAnywhereData(){
  const responseTwo = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const exploreDataTwo = await responseTwo.json();
  return exploreDataTwo;
}


export default async function Home() {
  const exploreData = await fetchExploreData();
  const exploreDataTwo = await fetchLiveAnywhereData();

  return (
    <div className="">
      <Header/>
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl pb-5 font-semibold">
            Explore nearby
          </h2>
          {/* pull data from the server--API end points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            { exploreData?.map(item => (
              <SmallCards key={item.location} 
              img={item.img} 
              distance={item.distance} 
              location={item.location}/>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl py-5 font-semibold">Live any where</h2>
          {/* medium cards */}
        
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {exploreDataTwo?.map(item => (
              <MediumCards key={item.img} img={item.img} title={item.title}/>
            ))}
          </div>
        </section>

        <LargeCard
        img="https://links.papareact.com/4cj"
        title="The greatest outdoor view"
        description="Wishlist created by dream house connect"
        buttonText="get started"/>
      </main>
    </div>
  );
}


