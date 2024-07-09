import React from 'react'
import Image from 'next/image'
const MediumCards = ({img,title}) => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative w-80 h-80'>
                <Image
                className='rounded-xl'
                src={img}
                layout='fill'
                alt=""/>
            </div>
            <h3 className='text-2xl mt-3 text-slate-600'>{title}</h3>
        </div>
    )
}

export default MediumCards
