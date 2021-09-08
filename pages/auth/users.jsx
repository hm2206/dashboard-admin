import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'

const UsersPage = () => (
    <Layout>
        <Breadcrumb parent="Users" title="List Users" />
        <Container fluid>
            <div>Page Users</div>
        </Container>
    </Layout>
)

export const getServerSideProps = authorize("Users");

export default connect(state => state)(UsersPage);