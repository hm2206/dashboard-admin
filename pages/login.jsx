import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FormLogin from '../components/auth/formLogin';

const PageLogin = () => {

    return (
        <Container fluid={true} className="p-0">
            <Row className="m-0">
                <Col xs="12" className="p-0">
                    <div>
                        <div className="login-card">
                            <FormLogin/>
                        </div>    
                    </div>    
                </Col>
            </Row>
        </Container>
    )
}

export default PageLogin;