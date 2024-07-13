
import Image from "next/image"

const PropertiesList = ({ properties }) => {
    return (
        <>
            {
                properties.map((property, index) => (
                <div key={property.index} className='  cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <div className='relative w-80 h-80'>
                        <Image
                        className='rounded-xl'
                        src={property.img}
                        layout='fill'
                        alt=""/>
                    </div>
                    <h3 className='text-2xl mt-3 text-slate-600'>{property.title}</h3>
                    <p className='text-sm text-slate-500'>{property.description}</p>
                </div>
                ))
            }
        </>
    )
}

export default PropertiesList
