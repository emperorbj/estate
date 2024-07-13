'use client'
// import PropertiesList from '@/components/PropertiesList';
// import {
//     MagnifyingGlassIcon, UserIcon,
//     GlobeAltIcon,
//     Bars4Icon
// } from '@heroicons/react/24/solid'
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { fetchData } from "../../lib/data"
// import { useRouter, useSearchParams } from 'next/navigation';
// import dynamic from 'next/dynamic';

import dynamic from 'next/dynamic';

const PropertiesClientSuspense = dynamic(() => import('../../components/PropertiesClient'), { ssr: false });






// const PropertyClient = dynamic(() => import('../../components/PropertyClient'), { ssr: false });
const Page = () => {

    // const router = useRouter();
    // const searchParams = useSearchParams();
    // const searchQuery = searchParams.get('search') || '';
    // const [query, setQuery] = useState(searchQuery);
    // const [filteredProperties, setFilteredProperties] = useState(fetchData);

    // useEffect(() => {
    //     if (searchQuery) {
    //         const lowerCaseSearchQuery = searchQuery.toLowerCase();
    //         const filtered = fetchData.filter(property =>
    //             (property.title && property.title.toLowerCase().includes(lowerCaseSearchQuery)) ||
    //             (property.location && property.location.toLowerCase().includes(lowerCaseSearchQuery)) ||
    //             (property.description && property.description.toLowerCase().includes(lowerCaseSearchQuery))
    //         );
    //         setFilteredProperties(filtered);
    //     } else {
    //         setFilteredProperties(fetchData);
    //     }
    // }, [searchQuery]);

    // const handleSearch = (event) => {
    //     const searchQuery = event.target.value;
    //     setQuery(searchQuery);
    //     router.push(`/properties?search=${searchQuery}`);
    // };


    return (
        // <div>
        //     <header className='sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10'>
        //         {/* left box */}
        //         <div
        //             className='h-10 relative flex items-center my-auto'>
        //             <Image
        //                 className='cursor-pointer'
        //                 onClick={() => router.push("/")}
        //                 src="https://links.papareact.com/qd3"
        //                 layout='fill'
        //                 style={{ objectFit: 'contain', objectPosition: 'left' }} alt='' />
        //         </div>
        //         {/* center search box */}
        //         {/* <SearchBar/> */}
        //         <div className='flex items-center md:border-2 shadow-md  rounded-full py-2'>
        //             <input
        //                 className='pl-5 bg-transparent outline-none flex-grow'
        //                 type='text' placeholder='search here...' value={query}
        //                 onChange={handleSearch} />
        //             <MagnifyingGlassIcon

        //                 className='h-8 hidden md:inline-flex bg-orange-400 rounded-full
        //             text-white p-1 cursor-pointer md:mx-2'/>
        //         </div>
        //         {/* right box*/}
        //         <div className='flex items-center space-x-6 justify-end'>
        //             <p className='text-slate-400 cursor-pointer hidden md:inline'>
        //                 Become a host
        //             </p>
        //             <GlobeAltIcon className='h-6' />
        //             <div className='p-2 border-2 rounded-full flex items-center space-x-2 '>
        //                 <Bars4Icon className='h-5' />
        //                 <UserIcon className='h-5' />
        //             </div>
        //         </div>
        //     </header>

        //     <main className='flex'>
        //         <section className='flex-grow pt-14 px-6'>
        //             <p className='text-sm'>200+ stays for  number of guests</p>
        //             <h1 className='text-2xl mt-2 font-semibold mb-6'>Stays in </h1>
        //             <div className='hidden lg:inline-flex space-x-4 mb-5 whitespace-nowrap text-slate-600'>
        //                 <p className='button'>cancelation feasibility</p>
        //                 <p className='button'>price</p>
        //                 <p className='button'>Types of place</p>
        //                 <p className='button'>Rooms and beds</p>
        //                 <p className='button'>More filters</p>
        //             </div>
        //         </section>
        //     </main>
        //     <section className="max-w-8xl mx-auto px-8 sm:px-16">
        //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        //             <PropertiesList properties={filteredProperties} />
        //         </div>
        //     </section>
        // </div>
        <div>
            <PropertiesClientSuspense />
        </div>
    )
}

export default Page
