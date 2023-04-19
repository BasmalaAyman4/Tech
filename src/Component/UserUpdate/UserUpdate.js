import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import style from "./UserUpdate.module.css"
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import logo from "./../../assets/icons/addImageIcon.svg"
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

export default function UserUpdate() {
   
    
    const [token,setToken] = useState(localStorage.getItem("token"))

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        personalPhoto:''

    })

    function handleLogo(){
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
   }
   const addFile = useRef(null)
   const addFileInput = useRef(null)
   const imageContentRef = useRef(null);
   const imageFirmRef = useRef(null);

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

    useEffect(()=>{
       
        axios.get(`https://jobs.invoacdmy.com/user/single-user`,{headers: {"Authorization" : `Bearer ${token}`}})
        .then(response => 
            setFormData({
                name: response.data.data.name,
                email: response.data.data.email,
                personalPhoto: response.data.data.personal_photo
            })
        ).catch((err)=>{console.log(err)})
    },[])
  

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })   
    }
    const updateProfileData = new FormData();
    const updateProfileLink = `https://jobs.invoacdmy.com/user/update-user`
    updateProfileData.append("name", formData.name);
    updateProfileData.append("email", formData.email);
    updateProfileData.append("personal_photo", formData.personalPhoto);
    const onSubmitHandler = (e) => {
        const toastId =   toast.loading("Please wait...")
        setTimeout(() => {toast.dismiss(toastId);}, 1000);
        e.preventDefault()
   
        axios
        .put(updateProfileLink,updateProfileData,{
            headers: {
              "Content-Type": "multipart/form-data",
              "Accept-Language" : `ar`,
              "Authorization" : `Bearer ${token}`
            }
          })
        .then((response) =>{
            toast.success("Successfully Updated!")
           
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
                        <div>
                                    <input className={`${style.fileImg}  input-file-js`}
                                        ref={(e)=>{addFileInput.current = e }} 
                                        id="input-file"
                                        name="personalPhoto"
                                        type="file" 
                                        onChange={(e)=>{previewUploadImage(e)}} />
                                    { 
                                    imageUrl == null ? 
                                    <>
                                    {formData.personalPhoto ? 
                                    <div  ref={addFile} onClick={()=>{handleLogo()}}>
                                       <img  className={`${style.img}`} ref={imageFirmRef} src={formData?.personalPhoto} alt=""/>
                                    </div>
                                    :
                                    <div className={`${style.logo}`}  ref={addFile} onClick={()=>{handleLogo()}}>
                                       <button  className={`${style.button}`}> + اضافه صوره </button>
                                    </div>
                                     } 
                                    </>
                                    :
                                    <div ref={addFile} onClick={()=>{handleLogo()}}>
                                        <img className={`${style.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                                    </div>        
                                    
                                    }   
                                                        
                            </div>
                          
                            <Form.Group className={`mb-3 ${style.form} mt-5`} controlId="formBasicPassword">
                            <Form.Label className={`${style.label}`}> تغيير اسم المستخدم </Form.Label>
                                <Form.Control name="name" autoComplete="off" className={`${style.input}`} placeholder="اسم المستخدم " onChange={onChangeHandler} value={formData?.name} dir="rtl" />
                            </Form.Group>
                            <Form.Group className={`mb-3${style.form}`} controlId="formBasicPassword">
                            <Form.Label className={`${style.label}`}>تغيير البريد الالكتروني   </Form.Label>
                                <Form.Control name="email" type="email" autoComplete="off" className={`${style.input}`} placeholder="البريد الالكتروني" onChange={onChangeHandler} value={formData?.email} dir="rtl" />
                            </Form.Group>
                            <button type='button' onClick={onSubmitHandler} className={style.log__btn}>  حفظ التغيرات</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}
