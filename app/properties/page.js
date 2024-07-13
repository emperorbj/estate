'use client'


import dynamic from 'next/dynamic';

const PropertiesClientSuspense = dynamic(() => import('../../components/PropertiesClient'), { ssr: false })

const Page = () => {
    return (
        <div>
            <PropertiesClientSuspense />
        </div>
    )
}

export default Page
