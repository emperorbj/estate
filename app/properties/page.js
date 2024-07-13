'use client'
import SearchBar from '../components/SearchBar';



const Page =() => {

    return (
        <div>
            <SearchBar/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-sm'>200+ stays for  number of guests</p>
                    <h1 className='text-2xl mt-2 font-semibold mb-6'>Stays in </h1>
                    <div className='hidden lg:inline-flex space-x-4 mb-5 whitespace-nowrap text-slate-600'>
                        <p className='button'>cancelation feasibility</p>
                        <p className='button'>price</p>
                        <p className='button'>Types of place</p>
                        <p className='button'>Rooms and beds</p>
                        <p className='button'>More filters</p>
                    </div>
                </section>

                <section>
            
                </section>
            </main>
        </div>
    )
}

export default Page
