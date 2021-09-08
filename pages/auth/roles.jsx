import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'

const RolesPage = () => (
    <Layout>
        <Breadcrumb parent="Roles" title="List Roles" />
        <Container fluid>
            <div>Page Roles</div>
        </Container>
    </Layout>
)

export const getServerSideProps = authorize("Roles");

export default connect(state => state)(RolesPage);