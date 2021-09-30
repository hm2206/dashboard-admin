import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'
import PersonList from '../../components/auth/people/personList'
import { translate } from 'react-switch-lang'

const BoardsPage = ({ t }) => {

    return (
        <Layout>
            <Breadcrumb parent={t('pages.restaurant.boards.title')} title={t('pages.restaurant.boards.description')} />
            <Container fluid>
                <PersonList/>
            </Container>
        </Layout>
    )
}

export const getServerSideProps = authorize("Boards");

export default connect(state => state)(translate(BoardsPage));