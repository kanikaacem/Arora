import { useState } from 'react';
import { Button, Modal, Form as BForm } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Signup({openForm,setOpenForm}) {
    const [form, setForm] = useState("login");
    const handleClose = () => setOpenForm(false);
    const changeForm = (formName) => setForm(formName)

    /*Login Form */
    const loginValues = {
        email: '',
        password: ''
    }

    const signupValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    return (
        <Modal
            show={openForm}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header className='justify-content-center border-0'>
                <div className="brandLogo" style={{ width: "80px" }}>
                    <img src="https://static.wixstatic.com/media/d5ac00_203b403d456d4d618b216ac6e5b97db1~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AORA_LOGO-removebg-preview.png"
                        width="100%"
                        alt="Aora_logo" />
                </div>
                <div className='close-icon' onClick={handleClose}>x</div>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center" style={{ padding: "10px 50px" }}>
                <p style={{ fontSize: "1.2rem", color: "#111" }}>
                    {`${form === "login" ? "Login to Arora" : form === "signup" ? "Signup to Arora" : "Forgot Password"}`}</p>

                {form === "login" &&
                    < Formik
                        initialValues={loginValues}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="login-form d-flex flex-column gap-3 w-100">
                                <Field type="email" name="email" className="form-input" placeholder="Email*" />
                                <Field type="password" name="password" className="form-input" placeholder="Password*" />
                                <p className='highlightText' onClick={() => changeForm("forgot_password")}>Forgot Password ?</p>
                                <Button variant="dark">Login</Button>
                                <p style={{ color: "#111", textAlign: "center" }}> Don't have an account?
                                    <span onClick={() => changeForm("signup")}
                                        className='highlightText'> Sign Up </span> </p>
                            </Form>
                        )}
                    </Formik>
                }
                {form === "signup" &&
                    <Formik
                        initialValues={signupValues}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="signup-form d-flex flex-column gap-3 w-100">
                                <div className="form-input-section">
                                    <label for="first_name">First name <span className="mandatory">*</span></label>
                                    <Field type="first_name" name="first_name" className="form-input" />

                                </div>
                                <div className="form-input-section">
                                    <label for="last_name">Last name <span className="mandatory">*</span></label>
                                    <Field type="last_name" name="last_name" className="form-input" />

                                </div>
                                <div className="form-input-section">
                                    <label for="email">Email <span className="mandatory">*</span></label>
                                    <Field type="email" name="email" className="form-input" />

                                </div>
                                <div className="d-flex gap-2" >
                                    <BForm.Check // prettier-ignore
                                        type="checkbox"
                                        id={`default-checkbox`}
                                        label="Sign up for newsletter"
                                        style={{ color: "#9d9b9b" }}
                                    />
                                </div>

                                <div className="form-input-section">
                                    <label for="password">Password <span className="mandatory">*</span></label>
                                    <Field type="password" name="password" className="form-input" />

                                </div>
                                <div className="form-input-section">
                                    <label for="confirm_password">Confirm Password <span className="mandatory">*</span></label>
                                    <Field type="password" name="confirm_password" className="form-input" />

                                </div>
                                <Button variant="dark">Signup</Button>
                                <p style={{ color: "#111", textAlign: "center" }}> Already have an account?
                                    <span onClick={() => changeForm("login")} className='highlightText'> Login  </span> </p>
                            </Form>
                        )}
                    </Formik>
                }
                {form === "forgot_password" && <>
                    <p style={{ color: "#111" }}>Please enter your email address below to receive a password reset link.</p>
                    < Formik
                        initialValues={loginValues}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="login-form d-flex flex-column gap-3 w-100">
                                <div className="form-input-section">
                                    <label for="email">Email <span className="mandatory">*</span></label>
                                    <Field type="email" name="email" className="form-input" />
                                </div>
                                <Button variant="dark">Submit</Button>
                                <p style={{ color: "#111", textAlign: "center" }}>Back to
                                    <span onClick={() => changeForm("signup")}
                                        className='highlightText'> Login </span> </p>
                            </Form>
                        )}
                    </Formik></>

                }
            </Modal.Body>

        </Modal >
    );
}

export default Signup;