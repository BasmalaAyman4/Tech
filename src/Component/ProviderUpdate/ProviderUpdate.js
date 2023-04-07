import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import style from "./ProviderUpdate.module.css"
import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
export default function ProviderUpdate() {
    const validname = /^[A-Za-z]+$/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const navigate = useNavigate();
    const [formGetUserData, setFormGetUserData] = useState({
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
    const [formData, setFormData] = useState({})
        // name: formGetUserData.name,
        // email: formGetUserData.email,
        // scientificDegree: formGetUserData.scientificDegree,
        // password: formGetUserData.password,
        // confirmPassword:formGetUserData.confirmPassword,
        // SpecializationId:formGetUserData.SpecializationId,
        // personalPhoto:formGetUserData.personalPhoto,
        // resumeFile:formGetUserData.resumeFile,
        // gender:formGetUserData.gender,
        // experience: formGetUserData.experience,
        // currentJob:formGetUserData.currentJob

    
    const { name, email, scientificDegree, password, confirmPassword, SpecializationId, personalPhoto,resumeFile, gender,experience,currentJob} = formData
    const [formError, setFormError] = useState({})
    const [provider,setProvider] = useState("")
    const [specializationId,setSpecializationId] = useState("")

    const [errResponse,seterrResponse] = useState("")
    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);

    const [categoriesArray,setCategoriesArray]= useState([])
    const providerId = useParams()
    const userId = providerId.id

    useEffect(() => {
        axios.get(`https://jobs.invoacdmy.com/provider/single-provider/${userId}`)
        .then((response) => {
            console.log(response.data.data)
            setFormData({
                name: response.data.data.name,
                email: response.data.data.email,
                scientificDegree: response.data.data.scientific_degree,
                password: '',
                confirmPassword: '',
                SpecializationId:response.data.data.category_id.id,
                personalPhoto:response.data.data.personal_photo,
                resumeFile:response.data.data.resume_file,
                gender:response.data.data.gender,
                experience:response.data.data.description,
                currentJob:response.data.data.current_job
            })
            console.log(formData,"gg")
        }).catch((err)=>{console.log(err)})
   
        axios.get("https://jobs.invoacdmy.com/category/all-categories",
        {
            headers:{
                "Accept-Language" : `ar`
            }
        })
        .then(response => 
            setCategoriesArray(response.data.data)
        ).catch((err)=>{console.log(err)})
    
    }, [])
   
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
    function handleLogo(){
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
   }
    

    const [imageUrl ,setImage] = useState(null)
    let previewUploadImage = (e) => {
          
      let file = e.target.files[0];
      if(!file){
        return;
      }
      let preViewLink = URL.createObjectURL(file);
       setImage(preViewLink)
       setFormData(prevValue=>{ 
        return{
          ...prevValue,
          'personalPhoto': file
        } 
      })
    
    }

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
            err.scientificDegree = "هذا الحقل مطلوب"
        }
        if (formData.resumeFile === '') {
            err.resumeFile =  "هذا الحقل مطلوب"
        }
        if (formData.personalPhoto === '') {
            err.personalPhoto =  "هذا الحقل مطلوب"
        }
        if (formData.currentJob === '') {
            err.currentJob =  "هذا الحقل مطلوب"
        }
        if (formData.experience === '') {
            err.experience =  "هذا الحقل مطلوب"
        }
        if (formData.SpecializationId === '') {
            err.SpecializationId =  "هذا الحقل مطلوب"
        }
        if (formData.gender === '') {
            err.gender =  "هذا الحقل مطلوب"
        }
        
        setFormError({ ...err })
        

    }
    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }
    
    const updateProfileLink = `https://jobs.invoacdmy.com/provider/update-provider/${userId}`
    const updateProfileData = new FormData();
    updateProfileData.append("name", formData.name);
    updateProfileData.append("email", formData.email);
    updateProfileData.append("scientific_degree", formData.scientificDegree);
    // updateProfileData.append("password", formData.password);
    // updateProfileData.append("confirm_password", formData.confirmPassword);
    updateProfileData.append("category_id", formData.SpecializationId);
    updateProfileData.append("personal_photo", formData.personalPhoto);
    updateProfileData.append("resume_file", formData.resumeFile);
    updateProfileData.append("gender", formData.gender);
    updateProfileData.append("description", formData.experience);
    updateProfileData.append("current_job", formData.currentJob);
 



    const onSubmitHandler = (e) => {
        e.preventDefault()
        handleError()
        axios
        .put(updateProfileLink,updateProfileData,{
            headers: {
              "Content-Type": "multipart/form-data",
              "Accept-Language" : `ar`
            }
          })
        .then((response) =>{
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
                            {/* <div className={`${style.logo}`}>
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
                            </div> */}
                            <div>
                                       <input className={`${style.fileImg}  input-file-js`} ref={(e)=>{
                    addFileInput.current = e
                  }}  id="input-file"  name="personalPhoto" type="file" onChange={(e)=>{previewUploadImage(e)}} />
                    { 
                    imageUrl == null ? 
                    <>
                    <div  ref={addFile} onClick={()=>{handleLogo()}}>
                        <img  className={`${style.img}`} ref={imageFirmRef} src={formData.personalPhoto} alt=""/>
                    </div>
                    {/* {errors.Logo && <span className="error-message ">{errors.Logo}</span>} */}
                    </>
                    :
                    <div ref={addFile} onClick={()=>{handleLogo()}}>
                        <img className={`${style.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                    </div>        
                    
}   
                    <Form.Text className={`${style.msErr}`}>
                      {formError.personalPhoto}
                    </Form.Text>                       
 </div>
                            {/* <div className={`${style.logo}`}>
                                { image ? 
                                <img src={image} alt=''  className={`${style.img}`} onClick={(event) => { event.preventDefault(); fileInputRef.current.click() }}  />
                                :
                                <img src={provider.personal_photo} alt=''  className={`${style.img}`} onClick={(event) => { event.preventDefault(); fileInputRef.current.click() }}  />
}                   
                                <input className={`${style.fileImg}`} type='file' ref={(e)=>{addFileInput.current = e}}  onChange={(e)=>{previewUploadImage(e)}}  />
                            </div> */}
                            <Form onSubmit={onSubmitHandler} >
                                <div className={style.userName}>
                            
                                    <Form.Group className="mb-3" controlId="name" >
                                        <Form.Label className={`${style.label}`}> تغيير اسم المستخدم </Form.Label>
                                        <Form.Control name="name" className={`${style.input}`} placeholder="اسم المستخدم" onChange={onChangeHandler} value={formData.name} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.name}
                                        </Form.Text>  
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label className={`${style.label}`}>تغيير البريد الالكتروني   </Form.Label>
                                        <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder=" البريد الإلكتروني" onChange={onChangeHandler} value={formData.email} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.email}
                                        </Form.Text>  
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="scientificDegree">
                                        <Form.Label className={`${style.label}`}> تغيير الدرجة العلمية   </Form.Label>
                                        <select
                                            placeholder="City"
                                            value={formData.scientificDegree}
                                            className={`${style.input}`}
                                            name="scientificDegree"
                                            onChange={onChangeHandler}
                                        >
                                            <option value='university'>جامعي</option>
                                            <option value='master'>ماجستير</option>
                                            <option value ='phd'>الدكتورا</option>

                                        </select>
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.scientificDegree}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="gender">
                                        <Form.Label className={`${style.label}`}> تغيير الجنس  </Form.Label>
                                        <select
                                            placeholder="State"
                                            className={`${style.input}`}
                                            name="gender"
                                            value={formData.gender}
                                            onChange={onChangeHandler}
                                        >
                                            <option value='male'>ذكر</option>
                                            <option value='female'>انثي</option>
                                             <Form.Text className={`${style.msErr}`}>
                                            {formError.gender}
                                        </Form.Text>
                                        </select>
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="resumeFile" >
                                        <Form.Label className={`${style.label}`}> تغيير السيره الذاتيه </Form.Label>
                                        <Form.Control  name="resumeFile" className={`${style.input}`}  onChange={previewUploadResumeFile} placeholder=" السيره الذاتيه" type='file' />
                                        <Link to={formData.resumeFile} >CV سيرتك الذاتيه</Link>
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.resumeFile}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="currentJob" >
                                        <Form.Label className={`${style.label}`}>تغيير المهنه الحالية </Form.Label>
                                        <Form.Control name="currentJob" className={`${style.input}`} placeholder=" المهنة الحالية" onChange={onChangeHandler} value={formData.currentJob} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.currentJob}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="Specialization">
                                        <Form.Label className={`${style.label}`}> التخصص </Form.Label>
                                        <select
                                            placeholder="التخصص"
                                            name="SpecializationId"
                                            value={formData.SpecializationId}
                                            onChange={onChangeHandler}
                                            className={`${style.input}`}
                                        >
                                            <option value='' >التخصص</option>
                                            {categoriesArray&&categoriesArray.map(category=>(
                                            <option value={category.id}  key={category.id} >{category.title}</option>
                                            ))}
                               
                                        </select>
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.SpecializationId}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="experience" >
                                        <Form.Label className={`${style.label}`}> تغيير نبذه عنك   </Form.Label>
                                        <Form.Control name="experience" className={`${style.input}`} placeholder=" نبذه عنك" onChange={onChangeHandler} value={formData.experience} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.experience}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="confirmPassword">
                                        <Form.Label className={`${style.label}`}> تأكيد كلمه المرور </Form.Label>
                                        <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder="تأكيد كلمة المرور" onChange={onChangeHandler} value={formData.confirmPassword} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.confirmPassword}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label className={`${style.label}`}>تغيير كلمه المرور </Form.Label>
                                        <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="كلمة المرور" onChange={onChangeHandler} value={formData.password} />
                                        <Form.Text className={`${style.msErr}`}>
                                            {formError.password}
                                        </Form.Text>
                                    </Form.Group>
                                </div>
                            </Form>
                            <button type='button' onClick={onSubmitHandler} className={style.log__btn}> حفظ التغيرات</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
