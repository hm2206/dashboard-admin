import React, { useState, useMemo } from 'react';
import { TabContent, TabPane, Label, FormGroup, Form, Input, Button } from 'reactstrap';
import { Eye, EyeOff } from 'react-feather'
import { translate } from 'react-switch-lang'
import LangBar from '../navbar/langBar'
import LoginRequest from '../../request/auth/loginRequest'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { Loader } from 'react-feather'

const loginRequest = new LoginRequest();

const FormLogin = ({ t }) => {

    const router = useRouter();

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({})
    const [show_password, setShowPassword] = useState(false);
    const [current_loading, setCurrentLoading] = useState(false)

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: [] }))
    }

    const togglePassword = () => setShowPassword((prev) => (!prev))

    const componentTooglePassword = useMemo(() => {
        let propsPassword = { onClick: togglePassword, className: "cursor-pointer" };
        return show_password ? <EyeOff {...propsPassword}/> : <Eye {...propsPassword}/>
    }, [show_password])

    const canSubmit = useMemo(() => {
        let required = ['email', 'password'];
        for (let attr of required) {
            let value = form[attr]
            if (!value) return false;
        }
        return true
    }, [form]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setCurrentLoading(true)
        await loginRequest.login(form)
        .then(res => {
            let { token } = res.data;
            setCookie(null, 'auth_token', token);
            router.push('/');
        })
        .catch(err => {
            setCurrentLoading(false)
            setErrors(err.errors);
        })
    }

    return (
        <div className="login-main login-tab"> 
            <TabContent activeTab={"jwt"} className="content-login">
                <TabPane  className="fade show" tabId={"jwt"}>
                    <Form className="theme-form" onSubmit={handleLogin}>
                        <h4>{t('formLogin.title')}</h4>
                        <p>{t('formLogin.description')}</p>

                        <div style={{
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                        }}>
                            <LangBar/>
                        </div>

                        <FormGroup>
                            <Label className="col-form-label">{t('formLogin.email')}</Label>
                            <Input className={`form-control`} 
                                type="email"
                                name="email"
                                value={`${form?.email || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                placeholder="example@gmail.com"
                                disabled={current_loading}
                            />
                            <label>{errors?.email?.[0] || ''}</label>
                        </FormGroup>

                        <FormGroup>
                            <Label className="col-form-label">{t('formLogin.password')}</Label>
                            <Input className={`form-control`}
                                name="password"
                                type={show_password ? 'text' : 'password'}
                                value={`${form?.password || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                placeholder="*********"
                                disabled={current_loading}
                            />
                            
                            <div className="show-hide pt-2">
                                {componentTooglePassword}
                            </div>

                            <label>{errors?.password?.[0] || ''}</label>
                        </FormGroup>

                        <div className="form-group mb-0">
                            <div className="checkbox ml-3"></div>
                            <a className="link" href="#javascript">{t('formLogin.forget_password')}</a>
                        </div>

                        <div className="form-group mb-0 mt-5">
                            <Button color="primary" 
                                className="btn-block"
                                disabled={!canSubmit || current_loading}
                            >
                                {current_loading ? <Loader/> : t('formLogin.button')} 
                            </Button>
                        </div>
                        
                        <p className="mt-4 mb-0">
                            {t('formLogin.have_an_account')}
                            <a className="ml-2" href="#javascript">{t('formLogin.create_account')}</a>
                        </p>
                    </Form>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default translate(FormLogin);