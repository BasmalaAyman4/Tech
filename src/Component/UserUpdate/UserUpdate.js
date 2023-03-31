import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import style from "./UserUpdate.module.css"
import Form from 'react-bootstrap/Form';
export default function UserUpdate() {
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

    })

    const { email, userName } = formData

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)

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
                        <div className={style.userName}>
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
                            <Form.Group className={`mb-3${style.form}`} controlId="formBasicPassword">
                                <Form.Label className={`${style.label}`} > تغيير اسم المستخدم </Form.Label>
                                <Form.Control name="userName" autoComplete="off" className={`${style.input}`} placeholder="اسم المستخدم " onChange={onChangeHandler} value={userName} dir="rtl" />
                            </Form.Group>
                            <Form.Group className={`mb-3${style.form}`} controlId="formBasicPassword">
                                <Form.Label className={`${style.label}`}> تغيير البريد الالكتروني </Form.Label>
                                <Form.Control name="email" type="email" autoComplete="off" className={`${style.input}`} placeholder="البريد الالكتروني" onChange={onChangeHandler} value={email} dir="rtl" />
                            </Form.Group>
                            <button className={style.log__btn}> حفظ التغيرات</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
