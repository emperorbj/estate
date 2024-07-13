
import dynamic from 'next/dynamic';

const PropertyClient = dynamic(() => import('../../components/PropertyClient'), { ssr: false });
const Page =() => {

    return (
        <div>
            <PropertyClient/>
        </div>
    )
}

export default Page
