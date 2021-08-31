import React from 'react';
import Layout from '../components/layout'
import { connect } from 'react-redux';
import { authorize } from '../helpers/authStaticProps'

const DashBoard = () => {
    
    return (
        <Layout>
            
        </Layout>
    )
}

export const getServerSideProps = authorize

export default connect(store => store)(DashBoard);