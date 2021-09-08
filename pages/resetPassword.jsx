import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FormResetPassword from '../components/auth/formResetPassword';
import { guest } from '../helpers/authServerSideProps'

const PageResetPassword = () => {

    return (
        <Container fluid={true} className="p-0">
            <Row className="m-0">
                <Col xs="12" className="p-0">
                    <div>
                        <div className="login-card">
                            <FormResetPassword/>
                        </div>    
                    </div>    
                </Col>
            </Row>
        </Container>
    )
}

export const getServerSideProps = guest('Reset Password')

export default PageResetPassword;