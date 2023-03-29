import React, { useState } from 'react'
import style from './Login.module.css'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import "./login.css"
export default function Login() {


    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',

    })

    const { email, password } = formData
    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)

    }

    function login(e) {
        e.preventDefault();


        let err = {}

        if (formData.email === '') {
            err.email = "Email is required";
        } else if (!validEmail.test(email)) {
            err.email = "Invalid Email";
        }
        if (formData.password === '') {
            err.password = "password is required"
        } else if (!validPass.test(password)) {
            err.password = 'Minimum eight characters, at least one letter and one numbe';

        }
        setFormError({ ...err })
    }

    return (
        <>
            <div className={`${style.path}`}>
                <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-between container" dir='rtl'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"></a></li>
                        <li class="breadcrumb-item active " >الرئيسيه</li>
                        <li class="breadcrumb-item " ><a href="#">حسابي</a></li>
                    </ol>
                </nav>
                <h4 className='container title' dir='rtl'>تسجيل الدخول</h4>
            </div>

            <section className={style.logForm}>

                <div className='container'>

                    <div className={style.login}>
                        <h2 className={style.login__title}> مرحبا بك مجددا</h2>
                        <p>يمكنك تسجيل الدخول باستخدام بريدك الالكتروني او اسم المستخدم</p>
                        <hr />
                        <div className={style.userName}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className={`${style.label}`}>اسم المستخدم </Form.Label>
                                <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder="اسم المستخدم او البريد الإلكتروني" onChange={onChangeHandler} value={email} dir="rtl" />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.email}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className={`${style.label}`}>كلمه المرور </Form.Label>
                                <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={password} dir="rtl" />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.password}
                                </Form.Text>
                            </Form.Group>
                            <button className={style.log__btn} onClick={login}>"تسجيل الدخول"</button>
                        </div>
                        <hr className={style.forgetLine} />
                        <a href='/forget' className={style.log__link}> "هل نسيت كلمة السر؟"</a>
                    </div>
                </div>
            </section>
        </>
    )
}
