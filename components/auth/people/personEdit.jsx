import React from 'react';
import { Form, CardHeader, CardBody, CardFooter, Row, Col, FormGroup, Label, Input } from 'reactstrap'

const PersonEdit = () => {
    
    return (
        <Form className="card">
            <CardHeader>
                <h4 className="card-title mb-0">EditProfile</h4>
                <div className="card-options">
                    <a className="card-options-collapse" href="#javascript">
                    <i className="fe fe-chevron-up"></i>
                    </a>
                    <a className="card-options-remove" href="#javascript">
                    <i className="fe fe-x"></i>
                    </a>
                </div>
                </CardHeader>
            <CardBody>
                <Row>
                    <Col lg="4">
                    <FormGroup>
                        <Label className="form-label">Company</Label>
                        <Input className="form-control" type="text" placeholder="Company" />
                    </FormGroup>
                    </Col>
                    <Col sm="6" md="3">
                    <FormGroup>
                        <Label className="form-label">Username</Label>
                        <Input className="form-control" type="text" placeholder="Username" />
                    </FormGroup>
                    </Col>
                    <Col sm="6" md="4">
                    <FormGroup>
                        <Label className="form-label">EmailAddress</Label>
                        <Input className="form-control" type="email" placeholder="Email" />
                    </FormGroup>
                    </Col>
                    <Col sm="6" md="6">
                    <FormGroup>
                        <Label className="form-label">FirstName</Label>
                        <Input className="form-control" type="text" placeholder="Company" />
                    </FormGroup>
                    </Col>
                    <Col sm="6" md="6">
                    <FormGroup>
                        <Label className="form-label">LastName</Label>
                        <Input className="form-control" type="text" placeholder="Last Name" />
                    </FormGroup>
                    </Col>
                    <Col md="12">
                    <FormGroup>
                        <Label className="form-label">Address</Label>
                        <Input className="form-control" type="text" placeholder="Home Address" />
                    </FormGroup>
                    </Col>
                    <Col sm="6" md="4">
                    <FormGroup>
                        <Label className="form-label">City</Label>
                        <Input className="form-control" type="text" placeholder="City" />
                    </FormGroup>
                    </Col>
                    <Col sm="6" md="3">
                    <FormGroup>
                        <Label className="form-label">PostalCode</Label>
                        <Input className="form-control" type="number" placeholder="ZIP Code" />
                    </FormGroup>
                    </Col>
                    <Col md="5">
                    <FormGroup>
                        <Label className="form-label">Country</Label>
                        <Input type="select" name="select" className="form-control btn-square">
                            <option>Perú</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col md="12">
                    <div className="form-group mb-0">
                        <Label className="form-label">AboutMe</Label>
                        <Input type="textarea" className="form-control" rows="5" placeholder="Enter About your description" />
                    </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter className="text-right">
                <button className="btn btn-primary" type="submit">UpdateProfile</button>
            </CardFooter>
        </Form>
    )
}

export default PersonEdit