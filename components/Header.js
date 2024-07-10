'use client'
import Image from 'next/image';
import { MagnifyingGlassIcon,
    UserIcon,
    GlobeAltIcon,
    Bars4Icon,
UserGroupIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';// theme css file

const Header = () => {
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    return (
        <header className='sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10'>
            {/* left box */}
            <div className='h-10 relative flex items-center my-auto'>
                <Image
                src="https://links.papareact.com/qd3" 
                layout='fill'
                style={{ objectFit: 'contain', objectPosition: 'left' }} alt='' />
            </div>
            {/* center search box */}
            <div className='flex items-center md:border-2 shadow-md  rounded-full py-2'>
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='pl-5 bg-transparent outline-none flex-grow'
                type='text' placeholder='search here'/>
                <MagnifyingGlassIcon className='h-8 hidden md:inline-flex bg-orange-400 rounded-full
                text-white p-1 cursor-pointer md:mx-2'/>
            </div>
            {/* right box*/}
            <div className='flex items-center space-x-6 justify-end'>
                <p className='text-slate-400 cursor-pointer hidden md:inline'>
                    Become a host
                </p>
                <GlobeAltIcon className='h-6'/>
                <div className='p-2 border-2 rounded-full flex items-center space-x-2 '>
                    <Bars4Icon className='h-5'/>
                    <UserIcon className='h-5'/> 
                </div>
            </div>
            { search &&
                (
                    <div className='flex flex-col mt-2 col-span-3 mx-auto'>
                        <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#F58D61']}
                        onChange={handleSelect}/>

                        <div className='flex py-3 border-b items-center mb-4 '>
                            <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>
                            <UserGroupIcon className='h-6'/>
                            <input type='number'
                            className='w-12 pl-2 text-lg text-red-500 outline-none'/>
                        </div>
                    </div>
                )
                    
                    
            }
            
        </header>
    )
}

export default Header
