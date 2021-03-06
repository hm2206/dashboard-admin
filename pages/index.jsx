import React from 'react';
import Layout from '../components/layout'
import Breadcrumb from '../components/layout/breadcrumb'
import { Container, Row, Col} from 'reactstrap'
import UserEdit from '../components/auth/users/userEdit'
import PersonEdit from '../components/auth/people/personEdit'
import { authorize } from '../helpers/authServerSideProps'
import { connect } from 'react-redux'

const IndexPage = () => (
    <Layout>
        <Breadcrumb parent="Users" title="Edit Profile" />
        <Container fluid>
            <div className="edit-profile">
                <Row>
                    <Col xl="4">
                        <UserEdit/>
                    </Col>
                    <Col xl="8">
                        <PersonEdit/>
                    </Col>
                </Row>
            </div>
        </Container>
    </Layout>
)

export const getServerSideProps = authorize('Perfil')

export default connect(state => state)(IndexPage);