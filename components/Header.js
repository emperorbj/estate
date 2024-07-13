
import Image from 'next/image';
import { 
    UserIcon,
    GlobeAltIcon,
    Bars4Icon} from '@heroicons/react/24/solid'// theme css file
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'



const Header = () => {


    // const resetSearch = () => {
    //     setSearch('')
    // }

    return (
        <header className='sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10'>
            {/* left box */}
            <div  
            className='h-10 relative flex items-center my-auto'>
                <Image
                className='cursor-pointer'
                onClick={()=> router.push("/")}
                src="https://links.papareact.com/qd3" 
                layout='fill'
                style={{ objectFit: 'contain', objectPosition: 'left' }} alt='' />
            </div>
            <div>
                {" "}
            </div>
            {/* center search box */}
            {/* <SearchBar/> */}
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
            
        </header>
    )
}

export default Header
