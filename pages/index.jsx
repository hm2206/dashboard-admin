import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/header';
import DefaultLayout from '../components/layouts/defaultLayout'

const Index = () => {
    return (
        <DefaultLayout
            sidebar={<Sidebar/>}
            header={<Header/>}
        >
            hkafdgasgsg
        </DefaultLayout>
    )
}

export default Index;