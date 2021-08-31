import React from 'react';
import Layout from '../components/layout'
import { authorize } from '../helpers/authServerSideProps'

const DashBoard = () => {
    
    return (
        <Layout>
            
        </Layout>
    )
}

export const getServerSideProps = authorize

export default DashBoard;