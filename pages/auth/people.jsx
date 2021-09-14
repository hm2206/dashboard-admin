import React, { useState } from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'
import PersonList from '../../components/auth/people/personList'
import { translate } from 'react-switch-lang'
import { FloatButton } from '../../components/utils/buttons'
import { Plus } from 'react-feather'
import PersonCreate from '../../components/auth/people/personCreate'

const PeoplePage = ({ t }) => {

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(prev => !prev)

    return (
        <Layout>
            <Breadcrumb parent={t('pages.auth.people.title')} title={t('pages.auth.people.description')} />
            <Container fluid>
                <PersonList/>
                {/* create person */}
                <FloatButton 
                    icon={<Plus/>}
                    color="success"
                    onClick={() => setModal(true)}
                />
                <PersonCreate isOpen={modal} 
                    toggle={toggle}
                />
            </Container>
        </Layout>
    )
}

export const getServerSideProps = authorize("People");

export default connect(state => state)(translate(PeoplePage));