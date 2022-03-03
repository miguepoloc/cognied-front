import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import "../assets/css/Login.css";
import Cel from "../assets/img/tortuga.svg";
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
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "Hola"
    };
    return (
        <>
            <img
                src={Ola}
                id="Ola"
                alt=""
                className='ola'
            />
            <div className="containerx">
                <div className="imgx">
                    <img
                        src={Cel}
                        id="Cel"
                        alt=""
                    />
                </div>
                <div className="login-containerx">
                    <Formik
                        initialValues={{
                            id: '',
                        }}
                        validationSchema={Yup.object({
                            id: Yup.number()
                                .required('Documento requerido'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                requestOptions.body = JSON.stringify(values, null, 2);
                                fetch("http://127.0.0.1:8000/api/datos/", requestOptions)
                                    .then(response => response.json())
                                    .then(res => console.log(res));
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {/* {({ }) => ( */}
                        <Form className='formx'>
                            <img
                                src={Logo}
                                id="Icono"
                                alt=""
                                className='avatarx'
                            />

                            <h2>Bienvenido</h2>

                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div>
                                    <MyTextInput
                                        name="id"
                                        type="number"
                                        clase="input"
                                        placeholder="Documento"
                                    />
                                </div>
                            </div>
                            <input className="btn" type="submit" value="Ingresar" />
                        </Form>
                        {/* )} */}
                    </Formik>

                </div>
            </div>
        </>
    );
}

function Login() {
    return <>
        <LoginForm />
    </>;
}

export default Login;