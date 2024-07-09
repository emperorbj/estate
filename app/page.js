import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCards from "@/components/SmallCards";
import Image from "next/image";
import fetch from 'node-fetch';


async function fetchExploreData() {
  // Replace with your data fetching logic
  const response = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await response.json();
  // console.log(exploreData); // Log the fetched data
  
  return exploreData;
}

async function fetchLiveAnywhereData(){
  const responsTwo = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const exploreDataTwo = await responsTwo.json();
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
        </section>
      </main>
    </div>
  );
}


