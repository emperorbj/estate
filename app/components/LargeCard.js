import Image from 'next/image'
import React from 'react'

const LargeCard = ({img,title,description,buttonText}) => {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                src={img}
                layout='fill'
                style={{objectFit: 'cover'}}
                alt=''/>
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl w-64 mb-4'>{title}</h3>
                <p>{description}</p>
                <button className='text-white text-sm bg-slate-800 mt-5 rounded-xl px-6 py-4'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
