import React, { useState } from 'react'
import style from "./ContactUs.module.css"
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function ContactUs() {


    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        subject: '',
        all: '',

    })

    const { userName, email, subject } = formData
    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let err = {}

        if (formData.userName === '' || formData.email === '' || formData.subject === '') {
            err.all = 'فضلا قم بملء الحقول المطلوبه!';
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
                        <li class="breadcrumb-item " ><a href="#">تواصل معنا</a></li>
                    </ol>
                </nav>
                <h4 className='container title' dir='rtl'>اتصل بنا</h4>
            </div>
            <div className={`${style.cards} container`}>
                <div className={style.card}>
                    <BsTwitter className={style.cardIcon} />
                    <p className={style.cardPara}>يسعدنا استقبال اقتراحتكم عبر تويتر</p>
                    <a href="#">@estsharaTech</a>
                </div>
                <div className={style.card}>
                    <MdEmail className={style.cardIcon} />
                    <p className={style.cardPara}>عن طريق البريد الالكتروني</p>
                    <a href="#" className={style.cardLink}>Pr@estsharaTech</a>
                </div>
            </div>
            <section className={style.logForm}>
                <div className='container' >
                    <div className={style.signup}>
                        <p className={style.signup__para}>سيتم الرد في أقرب وقت</p>
                        <hr />
                        <Form onSubmit={onSubmitHandler} >
                            <Form.Text className={`${style.msErr}`}>
                                {formError.all}
                            </Form.Text>
                            <div className={style.userName}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label className={`${style.label}`}>اسم المستخدم </Form.Label>
                                    <Form.Control name="userName" className={`${style.input}`} placeholder="اسم المستخدم" onChange={onChangeHandler} value={userName} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}>البريد الالكتروني  </Form.Label>
                                    <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={email} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}>  الغرض  </Form.Label>
                                    <select
                                        placeholder="State"
                                        className={`${style.input}`}
                                        name="purpose"
                                    >
                                        <option>استفسار</option>
                                        <option>شكوي</option>
                                        <option>اقتراح</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}> الموضوع</Form.Label>
                                    <Form.Control name="subject" type="subject" autoComplete="off" className={`${style.input}`} placeholder="الموضوع" onChange={onChangeHandler} value={subject} />
                                </Form.Group>
                                <Button className={style.signup__btn} type="submit">
                                    ارسال رساله
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}
