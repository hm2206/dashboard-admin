import React from 'react';
import { Form, FormGroup, Row, Col } from 'reactstrap'

const NavbarIndex = () => {

    return (
        <Row className="header-wrapper m-0">
            <Form inline className="search-full col" action="#" method="get">
                <FormGroup className="w-100">
                    <div className="Typeahead Typeahead--twitterUsers">
                        <div className="u-posRelative">
                            <input className="demo-input Typeahead-input form-control-plaintext w-100" 
                                type="text" placeholder="Search Cuba .."/>
                        <div className="spinner-border Typeahead-spinner" role="status">
                            <span className="sr-only">Loading...</span></div><i className="close-search" data-feather="x"></i>
                        </div>
                        <div className="Typeahead-menu"></div>
                    </div>
                </FormGroup>
            </Form>

            <Col className="header-logo-wrapper col-auto p-0">
                <div className="logo-wrapper">
                    <a href="index.html">
                        {/* <img className="img-fluid" src="../assets/images/logo/logo.png" alt=""/>} */}
                    </a>
                </div>
                <div className="toggle-sidebar">
                    <i className="status_toggle middle sidebar-toggle" data-feather="align-center"></i>
                </div>
            </Col>
        </Row>
    )
}

export default NavbarIndex;