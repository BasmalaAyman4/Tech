import React, { useState } from 'react'
import style from './Advisor.module.css'
import '../Sign-up/SignUp.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Advisor() {


    const validname = /^[A-Za-z]+$/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        major: '',
        experience: '',

    })

    const { userName, email, phone, password, confirmPassword, major, experience } = formData
    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const onChangeHandlerPhone = data => {
        setFormData({ ...formData, phone: data })
        console.log(formData)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        let err = {}

        if (formData.userName === '') {
            err.userName = 'الاسم مطلوب';
        } else if (!validname.test(userName)) {
            err.userName = 'يحب كتابه الاسم بدون مسافات';
        }
        if (formData.email === '') {
            err.email = "البريد الالكتروني مطلوب";
        } else if (!validEmail.test(email)) {
            err.email = "بريد غير صحيح";
        }
        if (formData.password === '') {
            err.password = "كلمه السر مطلوبه"
        } else if (!validPass.test(password)) {
            err.password = 'Minimum eight characters, at least one letter and one number';

        }
        if (formData.confirmPassword !== formData.password) {
            err.confirmPassword = "تأكيد كلمه المرور لا تتطابق"
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
                        <li class="breadcrumb-item " ><a href="#">التسجيل</a></li>
                    </ol>
                </nav>
                <h4 className='container title' dir='rtl'>تسجيل حساب مستشار</h4>
            </div>
            <section className={style.logForm}>
                <div className='container' >
                    <div className={style.signup}>
                        <h2 className={style.signup__title}>انشئ حسابك</h2>
                        <p className={style.signup__para}>فضلا قم بملء النموذج بالاسفل لانشاء حساب جديد خاص بك<a href='/'>  منصه استشاره تك</a></p>
                        <hr />
                        <Form onSubmit={onSubmitHandler} >
                            <div className={style.userName}>

                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label className={`${style.label}`}>اسم المستخدم </Form.Label>
                                    <Form.Control name="userName" className={`${style.input}`} placeholder="اسم المستخدم" onChange={onChangeHandler} value={userName} />
                                    <Form.Text className={`${style.msErr}`}>
                                        {formError.userName}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}>البريد الالكتروني  </Form.Label>
                                    <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={email} />
                                    <Form.Text className={`${style.msErr}`}>
                                        {formError.email}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}> الجنسية </Form.Label>
                                    <select
                                        placeholder="Country"

                                        name="skills"
                                        className={`${style.input}`}
                                    >
                                        <option>المملكه العربيه السعوديه</option>
                                        <option>مصر</option>
                                        <option>الهند</option>
                                        <option>امريكا</option>
                                        <option>اليابان</option>

                                    </select>

                                </Form.Group>
                                <div class={style.inputGroupp}>
                                    <Form.Label className={`${style.label}`}> رقم الهاتف </Form.Label>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}>الدرجة العلميه   </Form.Label>
                                    <select
                                        placeholder="City"

                                        className={`${style.input}`}
                                        name="address"
                                    >
                                        <option>جامعي</option>
                                        <option>ماجستير</option>
                                        <option>الدكتورا</option>

                                    </select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}>  الجنس  </Form.Label>
                                    <select
                                        placeholder="State"
                                        className={`${style.input}`}
                                        name="age"
                                    >
                                        <option>ذكر</option>
                                        <option>انثي</option>
                                    </select>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label className={`${style.label}`}> السيره الذاتيه </Form.Label>
                                    <Form.Control name="major" className={`${style.input}`} placeholder=" السيره الذاتيه" type='file' />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label className={`${style.label}`}> المهنه الحالية </Form.Label>
                                    <Form.Control name="major" className={`${style.input}`} placeholder=" المهنة الحالية" onChange={onChangeHandler} value={major} />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label className={`${style.label}`}> التخصص </Form.Label>
                                    <Form.Control name="major" className={`${style.input}`} placeholder=" التخصص" onChange={onChangeHandler} value={major} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label className={`${style.label}`}> سنوات الخبره </Form.Label>
                                    <Form.Control name="experience" className={`${style.input}`} placeholder=" سنوات الخبره" onChange={onChangeHandler} value={experience} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}> تأكيد كلمه المرور </Form.Label>
                                    <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder="تأكيد كلمة المرور" onChange={onChangeHandler} value={confirmPassword} />
                                    <Form.Text className={`${style.msErr}`}>
                                        {formError.confirmPassword}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${style.label}`}> كلمه المرور </Form.Label>
                                    <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={password} />
                                    <Form.Text className={`${style.msErr}`}>
                                        {formError.password}
                                    </Form.Text>
                                </Form.Group>

                                <Button className={style.signup__btn} type="submit">
                                    "انشاء حساب"
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}
