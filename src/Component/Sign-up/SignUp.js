import React, { useState } from 'react'
import style from './signUp.module.css'
import './SignUp.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
export default function SignUp() {
  
    
  const validname = /^[A-Za-z]+$/;
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [errResponse,seterrResponse] = useState("")
  const handleClose = () => setShow(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',

  })
   
  const { userName, email, password, confirmPassword } = formData
  const [formError, setFormError] = useState({})

  const onChangeHandler = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
    
  }
   const handleSignUpMesErr = () =>{
    let err = {}

    if (formData.userName === '') {
      err.userName = 'الاسم مطلوب';
    } 
    if (formData.email === '') {
      err.email = "بريد الكتروني مطلوب";
    } else if (!validEmail.test(email)) {
      err.email = "بريد الكتروني غير صحيح";
    }
    if (formData.password === '') {
      err.password = "كلمه السر مطلوبه"
    } 
    if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "تأكيد كلمه السر لا تتطابق"
    }
    setFormError({ ...err })
   }
    const reqSignUpLink = "https://jobs.invoacdmy.com/user/create-user"
    const reqSignUpData = {
      email: formData.email ,
      name:formData.userName,
      password: formData.password ,
      confirm_password: formData.confirmPassword
    }
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const handleRedirect = async () => {
            await delay(1500);
         
        if(localStorage.getItem("token")){
            window.location.reload();
            navigate("/")
        }else {
            navigate("/login") 
        }
     }

    function onSignUpHandler(event){
      const toastId =   toast.loading("Please wait...")
      setTimeout(() => {toast.dismiss(toastId);}, 1000);
      event.preventDefault();
      handleSignUpMesErr()
      axios.post(reqSignUpLink,reqSignUpData)
      .then((response)=> {
        localStorage.setItem("token",response.data.data.token)
        toast.success("Successfully SignUp!")
        handleRedirect()
      })
      .catch((err)=>{
        toast.error(err.response.data.message)
      })
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
        <h4 className='container title' dir='rtl'>تسجيل حساب مستفيد</h4>
      </div>
      <section className={style.logForm}>
        <div className='container' >
          <div className={style.signup}>
            <h2 className={style.signup__title}>انشئ حسابك</h2>
            <p className={style.signup__para}>فضلا قم بملء النموذج بالاسفل لانشاء حساب جديد خاص بك<a href='/'>  منصه استشاره تك</a></p>
            <hr />
            <Form onSubmit={(event)=>{onSignUpHandler(event)}} >
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
                  انشاء حساب
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}
