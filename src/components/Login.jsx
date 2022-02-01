import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import "../assets/css/Login.css";
import Cel from "../assets/img/Cel.svg";
import Ola from "../assets/img/wave.png";
import Logo from "../assets/img/logo9.svg";

const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={props.clase} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const LoginForm = () => {
    return (
        <>
            <img
                src={Ola}
                id="Ola"
                alt=""
                className='wave'
            />
            <div className="container">
                <div className="img">
                    <img
                        src={Cel}
                        id="Cel"
                        alt=""
                    />
                </div>
                <div className="login-container">
                    <Formik
                        initialValues={{
                            documento: '',
                            // password: '',
                        }}
                        validationSchema={Yup.object({
                            documento: Yup.number()
                                .required('Documento requerido'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <img
                                src={Logo}
                                id="Icono"
                                alt=""
                                className='avatar'
                            />

                            <h2>Bienvenido</h2>

                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div>
                                    {/* <h5>Usuario</h5> */}
                                    <MyTextInput
                                        name="documento"
                                        type="number"
                                        clase="input"
                                        placeholder="Documento"
                                    />
                                </div>
                            </div>

                            {/* 
                            <div className="input-div two">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div>
                                    <h5>Contraseña</h5>
                                    <MyTextInput
                                        name="password"
                                        type="password"
                                        clase="input"
                                        placeholder="Contraseña"
                                    />
                                </div>
                            </div> 
                            <a href="/#">Olvidé la contraseña</a>*/}

                            <input className="btn" type="submit" value="Ingresar" />
                        </Form>

                    </Formik>

                </div>
            </div>
        </>
    );
}


function Login() {
    return <LoginForm />;
}

export default Login;