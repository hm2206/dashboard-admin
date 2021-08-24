import React, { useState, useMemo } from 'react';
import { TabContent, TabPane, Label, FormGroup, Form, Input, Button } from 'reactstrap';
import { Eye, EyeOff } from 'react-feather'

const FormLogin = () => {

    const [form, setForm] = useState({})
    const [show_password, setShowPassword] = useState(false);

    const handleInput = ({ name, value }) => setForm((prev) => ({ ...prev, [name]: value }))

    const togglePassword = () => setShowPassword((prev) => (!prev))

    const componentTooglePassword = useMemo(() => {
        let propsPassword = { onClick: togglePassword, className: "cursor-pointer" };
        return show_password ? <EyeOff {...propsPassword}/> : <Eye {...propsPassword}/>
    }, [show_password])

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Logged')
    }

    return (
        <div>
            <div className="login-card">
                <div className="login-main login-tab"> 
                    <TabContent activeTab={"jwt"} className="content-login">
                        <TabPane  className="fade show" tabId={"jwt"}>
                            <Form className="theme-form" onSubmit={handleLogin}>
                                <h4>{"Iniciar Sesión"}</h4>
                                <p>{"Ingrese su correo y contraseña para iniciar sesión"}</p>

                                <FormGroup>
                                    <Label className="col-form-label">Correo Electrónico</Label>
                                    <Input className="form-control" 
                                        type="email"
                                        name="email"
                                        value={`${form?.email || ''}`}
                                        onChange={(e) => handleInput(e.target)}
                                        placeholder="example@gmail.com"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label className="col-form-label">Contraseña</Label>
                                    <Input className="form-control"
                                        name="password"
                                        type={show_password ? 'text' : 'password'}
                                        value={`${form?.password || ''}`}
                                        onChange={(e) => handleInput(e.target)}
                                        placeholder="*********"
                                    />
                                    
                                    <div className="show-hide pt-2">
                                        {componentTooglePassword}
                                    </div>
                                </FormGroup>

                                <div className="form-group mb-0">
                                    <div className="checkbox ml-3">
                                        <Input id="checkbox1" type="checkbox"/>
                                        <Label className="text-muted" for="checkbox1">Recordar Contraseña</Label>
                                    </div>

                                    <a className="link" href="#javascript">¿Olvidaste tu contraseña?</a>
                                    <Button color="primary" 
                                        className="btn-block"
                                        disabled={!form.email || !form.password}
                                    >
                                        Iniciar Sesión
                                    </Button>
                                </div>
                                
                                <p className="mt-4 mb-0">{"¿No tienes una cuenta?"}<a className="ml-2" href="#javascript">Crear cuenta</a></p>
                            </Form>
                        </TabPane>
                    </TabContent>
                </div>
            </div> 
        </div>
    )
}

export default FormLogin;