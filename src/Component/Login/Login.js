import React, { useState } from 'react'
import style from './Login.module.css'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import "./login.css"
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Login() {

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
    const reqLoginLink = "https://jobs.invoacdmy.com/provider/login"
    const [errResponse,seterrResponse] = useState("")
    const [formData, setFormData] = useState({  
        email: '', 
        password: '',
    })
   
    const { email, password } = formData
    const [formError, setFormError] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function handleErrors(){
                if(!formData.email || !formData.password ){
                    if(!formData.email){
                        setFormError(prevValue=>{ 
                            return{
                                ...prevValue,
                                email: "this field is required"
                            }
                        })
                    }
                    else if(formData.email &&!validEmail.test(formData.email)){
                        setFormError(prevValue=>{ 
                            return{
                            ...prevValue,
                            email: "Email is invalid" 
                            }
                        })
                    }     
                    else{
                        setFormError(prevValue=>{ 
                            return{
                            ...prevValue,
                            email: ""
                            
                            } 
                        })
                    }
                
                    if(!formData.password){
                        setFormError(prevValue=>{ 
                            return{
                            ...prevValue,
                            password: "this field is required"
                            } 
                        })
                    } else{
                        setFormError(prevValue=>{ 
                            return{
                            ...prevValue,
                            password: ""
                            
                            } 
                        })
                    }
                } else{
                    setFormError({})
                }     
    }
  
    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        handleErrors()
    }

    const reqLoginData = {
        email: formData.email ,
        password: formData.password ,
    }
   
    function handleLoginSubmit(event){
      event.preventDefault();
      axios.post(reqLoginLink,reqLoginData)
      .then(response => localStorage.setItem("token",response.data.token))
      .catch((err)=>{
        setShow(true)
        seterrResponse(err.response.data.message)
    })
    }
  
    return (
        <>
            <Modal className={`${style['modal__mess-err']}`} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>عذرا </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errResponse}
                </Modal.Body>
                <Modal.Footer className='justify-content-around'>
                <Link to="/signup" onClick={handleClose}>
                    انشاء حساب مستخدم 
                </Link>
                <Link to="/signup-advisor" onClick={handleClose}>
                    انشاء حساب مستشار 
                </Link>
                </Modal.Footer>
            </Modal>

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
                <div className={style.login}>
                    <div className='container'>
                        <h2 className={style.login__title}> مرحبا بك مجددا</h2>
                        <p>يمكنك تسجيل الدخول باستخدام بريدك الالكتروني او اسم المستخدم</p>
                        <hr />
                       <div className='container'>
                        <div className={style.userName}>
                            <Form.Group className="mb-3 input-login_container" controlId="formBasicPassword">
                                <Form.Label className={`${style.label}`}> البريد الإلكتروني</Form.Label>
                                <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={email} dir="rtl" />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.email}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 input-login_container" controlId="formBasicPassword">
                                <Form.Label className={`${style.label}`}>كلمه المرور </Form.Label>
                                <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={password} dir="rtl" />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.password}
                                </Form.Text>
                            </Form.Group>
                           
                            <button type='button' className={style.log__btn} onClick={(event)=>{handleLoginSubmit(event)}}>تسجيل الدخول</button>
                        </div>
                        <hr className={style.forgetLine} />
                        <a href='/forget' className={style.log__link}> هل نسيت كلمة السر؟</a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
