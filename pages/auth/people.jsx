import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'
import PersonList from '../../components/auth/people/personList'

const PeoplePage = () => (
    <Layout>
        <Breadcrumb parent="People" title="List People" />
        <Container fluid>
            <PersonList/>
        </Container>
    </Layout>
)

export const getServerSideProps = authorize("People");

export default connect(state => state)(PeoplePage);