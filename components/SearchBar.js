// 'use client'
// import { MagnifyingGlassIcon,UserIcon,
//     GlobeAltIcon,
//     Bars4Icon } from '@heroicons/react/24/solid'
// import { useState } from 'react';
// import Image from 'next/image';


// const SearchBar = () => {


//     return (
//         <header className='sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10'>
//             {/* left box */}
//             <div
//                 className='h-10 relative flex items-center my-auto'>
//                 <Image
//                     className='cursor-pointer'
//                     onClick={() => router.push("/")}
//                     src="https://links.papareact.com/qd3"
//                     layout='fill'
//                     style={{ objectFit: 'contain', objectPosition: 'left' }} alt='' />
//             </div>
//             {/* center search box */}
//             {/* <SearchBar/> */}
//             <div className='flex items-center md:border-2 shadow-md  rounded-full py-2'>
//                 <input
//                     className='pl-5 bg-transparent outline-none flex-grow'
//                     type='text' placeholder='search here' />
//                 <MagnifyingGlassIcon
//                     // onClick={}
//                     className='h-8 hidden md:inline-flex bg-orange-400 rounded-full
//                 text-white p-1 cursor-pointer md:mx-2'/>
//             </div>
//             {/* right box*/}
//             <div className='flex items-center space-x-6 justify-end'>
//                 <p className='text-slate-400 cursor-pointer hidden md:inline'>
//                     Become a host
//                 </p>
//                 <GlobeAltIcon className='h-6' />
//                 <div className='p-2 border-2 rounded-full flex items-center space-x-2 '>
//                     <Bars4Icon className='h-5' />
//                     <UserIcon className='h-5' />
//                 </div>
//             </div>
//         </header>
//         /////////////////////////////////////////////////////////////
//     )
// }

// export default SearchBar
