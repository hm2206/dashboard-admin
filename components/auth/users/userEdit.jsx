import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Media, Form, FormGroup, Label, Input } from 'reactstrap'

const UserEdit = () => {

    return (
        <Card>
            <CardHeader>
                <h4 className="card-title mb-0">MyProfile</h4>
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
                <Form>
                    <Row className="mb-2">
                        <div className="col-auto">
                            <Media className="img-70 rounded-circle" alt="" src="/image/7.jpg" />
                        </div>
                        <Col>
                            <h3 className="mb-1">MarkJecno</h3>
                            <p className="mb-4">Designer</p>
                        </Col>
                    </Row>
                    <FormGroup>
                        <h6 className="form-label">Bio</h6>
                        <Input type="textarea" className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label">EmailAddress</Label>
                        <Input className="form-control" placeholder="your-email@domain.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label">Password</Label>
                        <Input className="form-control" type="password" defaultValue="password" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label">Website</Label>
                        <Input className="form-control" placeholder="http://Uplor .com" />
                    </FormGroup>
                    <div className="form-footer">
                        <button className="btn btn-primary btn-block">Save</button>
                    </div>
                </Form>
            </CardBody>
        </Card> 
    );
}

export default UserEdit;

