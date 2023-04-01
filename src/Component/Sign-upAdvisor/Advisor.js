import React, { useEffect, useRef, useState } from 'react'
import style from './Advisor.module.css'
import '../Sign-up/SignUp.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Advisor() {


    const validname = /^[A-Za-z]+$/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        scientificDegree: '',
        password: '',
        confirmPassword: '',
        SpecializationId:'',
        personalPhoto:'',
        resumeFile:'',
        gender:'',
        experience: '',
        currentJob:''

    })
    const [errResponse,seterrResponse] = useState("")
    const [show, setShow] = useState(false);
    const [categoriesArray,setCategoriesArray]= useState([])
    const handleClose = () => setShow(false);
    useEffect(() => {
        axios.get("https://jobs.invoacdmy.com/category/all-categories",{headers: {"Accept-Language" : `ar`},}).then(response => 
        setCategoriesArray(response.data.data)
        ).catch((err)=>{console.log(err)})
    },[])

    const { name, email, scientificDegree, password, confirmPassword, SpecializationId, personalPhoto,resumeFile, gender,experience,currentJob} = formData
    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
        
    }
  
    const addFileInput = useRef(null)
    const addImageInput = useRef(null);
   

    let previewUploadResumeFile = (e) => {   
        let file = e.target.files[0];
        if(!file){
          return;
        }
         setFormData(prevValue=>{ 
          return{
            ...prevValue,
            resumeFile : file
          } 
        })
      }
    let previewUploadPersonalPhoto = (e) => {  
        let file = e.target.files[0];
        if(!file){
          return;
        }
         setFormData(prevValue=>{ 
          return{
            ...prevValue,
            personalPhoto : file
          } 
        }) 
      }
      
 
    function handleError(){
        let err = {}

        if (formData.name === '') {
            err.name = 'الاسم مطلوب';
        } else if (!validname.test(name)) {
            err.name = 'يحب كتابه الاسم بدون مسافات';
        }
        if (formData.email === '') {
            err.email = "البريد الالكتروني مطلوب";
        } else if (!validEmail.test(email)) {
            err.email = "بريد غير صحيح";
        }
        if (formData.password === '') {
            err.password ="كلمه السر مطلوبه"
        } 
        if (formData.confirmPassword === "") {
            err.confirmPassword = "تأكيد كلمه السر مطلوبه"
        }
        if (formData.confirmPassword !== formData.password) {
            err.confirmPassword = "تأكيد كلمه المرور لا تتطابق"
        }
        if (formData.scientificDegree === '') {
            err.scientificDegree = "Required Failed"
        }
        if (formData.resumeFile === '') {
            err.resumeFile = "Required Failed"
        }
        if (formData.personalPhoto === '') {
            err.personalPhoto = "Required Failed"
        }
        if (formData.currentJob === '') {
            err.currentJob = "Required Failed"
        }
        if (formData.experience === '') {
            err.experience = "Required Failed"
        }
        setFormError({ ...err })
        

    }
    const reqSignUpLink = "https://jobs.invoacdmy.com/provider/create-provider"
    const reqSignUpData = new FormData();
    reqSignUpData.append("name", formData.name);
    reqSignUpData.append("email", formData.email);
    reqSignUpData.append("scientific_degree", formData.scientificDegree);
    reqSignUpData.append("password", formData.password);
    reqSignUpData.append("confirm_password", formData.confirmPassword);
    reqSignUpData.append("category_id", formData.SpecializationId);
    reqSignUpData.append("personal_photo", formData.personalPhoto);
    reqSignUpData.append("resume_file", formData.resumeFile);
    reqSignUpData.append("gender", formData.gender);
    reqSignUpData.append("description", formData.experience);
    reqSignUpData.append("current_job", formData.currentJob);
    // const reqSignUpData1 = {
    //     name: formData.name ,
    //     email: formData.email ,
    //     scientific_degree:formData.scientificDegree,
    //     password:formData.password,
    //     confirm_password:formData.confirmPassword,
    //     category_id:formData.SpecializationId,
    //     personal_photo:formData.personalPhoto,
    //     resume_file:formData.resumeFile,
    //     gender:formData.gender,
    //     description:formData.experience,
    //     current_job:formData.currentJob
    // }
   
    const onSubmitHandler = (event) => {
        event.preventDefault();
        handleError()
        axios
        .post(reqSignUpLink,reqSignUpData,{
            headers: {
              "Content-Type": "multipart/form-data",
              "Accept-Language" : `ar`
            }
          })
        .then((response) =>{
             localStorage.setItem("token",response.data.token)
             setShow(true)
             seterrResponse(response.data.message)
        })
        .catch((err)=>{
          setShow(true)
          seterrResponse(err.response.data.message)
      })
    }
   
    return (
        <>
           <Modal className={`${style['modal__mess-err']}`} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>اهلا بك </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errResponse}
                </Modal.Body>
     
            </Modal>
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
                            <div className='container'>
                                <div className={style.userName}>

                                    <Form.Group className="mb-2 mt-3" controlId="name" >
                                        <Form.Label className={`${style.label}`}>اسم المستخدم </Form.Label>
                                        <Form.Control type='text' name="name" className={`${style.input}`} placeholder="اسم المستخدم" onChange={onChangeHandler} value={name} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.name}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-2 mt-3" controlId="email">
                                        <Form.Label className={`${style.label}`}>البريد الالكتروني  </Form.Label>
                                        <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={email} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.email}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="scientificDegree">
                                        <Form.Label className={`${style.label}`}>الدرجة العلميه </Form.Label>
                                        <select
                                            placeholder="الدرجة العلميه"
                                            className={`${style.input}`}
                                            name="scientificDegree"
                                            value={scientificDegree}
                                            onChange={onChangeHandler}
                                        >   
                                        
                                            <option value=''>الدرجة العلميه</option>
                                            <option value={`university`} >جامعي</option>
                                            <option value={`master`}>ماجستير</option>
                                            <option value={`phd`}>الدكتورا</option>
                                        </select>
                                    
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-2" controlId="Specialization">
                                        <Form.Label className={`${style.label}`}> التخصص </Form.Label>
                                        <select
                                            placeholder="التخصص"
                                            name="SpecializationId"
                                            value={SpecializationId}
                                            onChange={onChangeHandler}
                                            className={`${style.input}`}
                                        >
                                            <option value='' >التخصص</option>
                                            {categoriesArray&&categoriesArray.map(category=>(
                                            <option value={category.id}  key={category.id} >{category.title}</option>
                                            ))}

                                        </select>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="password">
                                        <Form.Label className={`${style.label}`}> كلمه المرور </Form.Label>
                                        <Form.Control name="password" type="password" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={password} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.password}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="confirmPassword">
                                        <Form.Label className={`${style.label}`}> تأكيد كلمه المرور </Form.Label>
                                        <Form.Control name="confirmPassword" type="password"  className={`${style.input}`} placeholder="تأكيد كلمة المرور" onChange={onChangeHandler} value={confirmPassword} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.confirmPassword}
                                        </Form.Text>
                                    </Form.Group>
                                
                                    <Form.Group className="mb-2" controlId="gender">
                                        <Form.Label className={`${style.label}`}>  الجنس  </Form.Label>
                                        <select
                                            placeholder="gender"
                                            className={`${style.input}`}
                                            name="gender"
                                            value={gender}
                                            onChange={onChangeHandler}
                                        >
                                            <option value={'male'}>ذكر</option>
                                            <option value={'female'}>انثي</option>
                                        </select>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="resumeFile" >
                                        <Form.Label className={`${style.label}`}> السيره الذاتيه </Form.Label>
                                        <Form.Control 
                                        name="resumeFile"
                                        className={`${style.input}`} 
                                        placeholder=" السيره الذاتيه"
                                        type='file' 
                                        ref={(e)=>{addFileInput.current = e}} 
                                        onChange={(e)=>{previewUploadResumeFile(e)}} 
                                    />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.resumeFile}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="personalPhoto" >
                                        <Form.Label className={`${style.label}`}> الصوره الشخصية</Form.Label>
                                        <Form.Control 
                                        name="personalPhoto"
                                        className={`${style.input}`} 
                                        placeholder=" الصوره الشخصية"
                                        type='file' 
                                        ref={(e)=>{addImageInput.current = e}} 
                                        onChange={(e)=>{previewUploadPersonalPhoto(e)}} 
                                    />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.personalPhoto}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="currentJob" >
                                        <Form.Label className={`${style.label}`}> المهنه الحالية </Form.Label>
                                        <Form.Control name="currentJob" className={`${style.input}`} placeholder=" المهنة الحالية" onChange={onChangeHandler} value={currentJob} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.currentJob}
                                        </Form.Text>
                                    </Form.Group>
                                    
                                </div>
                                <div className={`${style['description-margin']} `}>
                                    <Form.Group className="mb-4" controlId="experience" >
                                  
                                        <Form.Control name="experience" className={`${style.input}`} placeholder="نبذه عنك " onChange={onChangeHandler} value={experience} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.experience}
                                        </Form.Text>
                                    </Form.Group>

                                    <Button className={style.signup__btn} type="submit">
                                        انشاء حساب
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}
