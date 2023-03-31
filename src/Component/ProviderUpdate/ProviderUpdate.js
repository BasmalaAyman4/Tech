import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import style from "./ProviderUpdate.module.css"
import Form from 'react-bootstrap/Form';
export default function ProviderUpdate() {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result)
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null)
        }
    }, [image])
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        major: '',
        experience: '',

    })

    const { userName, email, password, confirmPassword, major, experience } = formData

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <div className={`${style.path}`}>
                <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-between container" dir='rtl'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"></a></li>
                        <li class="breadcrumb-item active " >الرئيسيه</li>
                        <li class="breadcrumb-item " ><a href="#">تعديل الحساب</a></li>
                    </ol>
                </nav>
                <h4 className='container title' dir='rtl'>تعديل حسابي</h4>
            </div>

            <section className={style.logForm}>
                <div className='container'>
                    <div className={style.login}>
                        <p className={style.loginPara}>تعديل الحساب</p>
                        <div >
                            <div className={`${style.logo}`}>
                                {preview ? (<img src={preview} alt='' onClick={() => { setImage(null) }} className={`${style.img}`} />) :
                                    (<button onClick={(event) => { event.preventDefault(); fileInputRef.current.click() }} className={`${style.button}`}> + اضافه صوره </button>)}
                                <input className={`${style.fileImg}`} type='file' ref={fileInputRef} accept="image/*"
                                    onChange={(event) => {
                                        const file = event.target.files[0];
                                        if (file) {
                                            setImage(file)
                                        } else {
                                            setImage(null)
                                        }
                                    }} />
                            </div>
                            <Form onSubmit={onSubmitHandler} >
                                <div className={style.userName}>

                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label className={`${style.label}`}> تغيير اسم المستخدم </Form.Label>
                                        <Form.Control name="userName" className={`${style.input}`} placeholder="اسم المستخدم" onChange={onChangeHandler} value={userName} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className={`${style.label}`}>تغيير البريد الالكتروني   </Form.Label>
                                        <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={email} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className={`${style.label}`}> تغيير الدرجة العلمية   </Form.Label>
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
                                        <Form.Label className={`${style.label}`}> تغيير الجنس  </Form.Label>
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
                                        <Form.Label className={`${style.label}`}> تغيير السيره الذاتيه </Form.Label>
                                        <Form.Control name="major" className={`${style.input}`} placeholder=" السيره الذاتيه" type='file' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label className={`${style.label}`}>تغيير المهنه الحالية </Form.Label>
                                        <Form.Control name="major" className={`${style.input}`} placeholder=" المهنة الحالية" onChange={onChangeHandler} value={major} />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label className={`${style.label}`}>تغيير التخصص </Form.Label>
                                        <Form.Control name="major" className={`${style.input}`} placeholder=" التخصص" onChange={onChangeHandler} value={major} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label className={`${style.label}`}>تغيير سنوات الخبره </Form.Label>
                                        <Form.Control name="experience" className={`${style.input}`} placeholder=" سنوات الخبره" onChange={onChangeHandler} value={experience} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className={`${style.label}`}> تأكيد كلمه المرور </Form.Label>
                                        <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder="تأكيد كلمة المرور" onChange={onChangeHandler} value={confirmPassword} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className={`${style.label}`}>تغيير كلمه المرور </Form.Label>
                                        <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={password} />
                                    </Form.Group>
                                </div>
                            </Form>
                            <button className={style.log__btn}> حفظ التغيرات</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
