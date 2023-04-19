import React, { useState } from 'react'
import style from "./AdvisorsDetails.module.css"
import eng1 from "./../../assets/Images/team1.png"
import { MdEmail } from "react-icons/md";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Chat from "./../../Global/chat/Chat"
import { Link, NavLink, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function AdvisorsDetails() {

    const [token,setToken] = useState("")
    const [provider,setProvider] = useState("")
    const [providerCategory,setProviderCategory]= useState("")
    const providerId = useParams()
    const id = providerId.id
    useEffect(() => {
        axios.get(`https://jobs.invoacdmy.com/provider/single-provider/${id}`,{headers: {"Accept-Language" : `ar`}})
        .then((response) => {    
        setProvider(response.data.data)
        setProviderCategory(response.data.data.category_id?.title)

    }).catch((err)=>{console.log(err)})
    }, [])
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token])
    return (
        <div className={style.all}>
            {token ? <NavLink to={`/chatwithEng/${id}`} className={`${style.btn}`}> <span className={`${style.modal__para}`}>  التواصل مباشر </span></NavLink> : <Chat />}
           
                <div className='container'>
                <section className={style.details}>
                <div className={style.advisorsDetails}>
                    <div className={style.name}>
                        <img src={provider?.personal_photo} className={style.img} alt="" />
                        <div>
                            <h4>{provider?.name} </h4>
                            <p>{providerCategory} </p>
                            <p className='d-flex align-items-center justify-content-between'>
                                {provider?.email} 
                                <MdEmail /> 
                            </p>
                        </div>
                    </div>
                    
                </div>
                {/* <div className={style.career}>
                    <h4 className={style.careerTitle} >المسمى الوظيفي:</h4>
                    <p>{provider?.description}</p>
                
                </div> */}
                <div className={style.career}>
                    <h4 className={style.careerTitle} >الخبرة المهنية :</h4>
                    <h5 className={style.careerDate}>السيره الذاتيه</h5>
                    <Link to={provider.resume_file} > cv </Link>   
                
                    <h5 className={style.careerDate}>الدرجه العمليه</h5>
                    <p className={style.job}>
                        {provider?.scientific_degree ==="master" ? "ماجستير"
                        : provider?.scientific_degree === "university" ? 
                        "جامعي":"دكتوراه"
                        }
                    </p>
                    <h5 className={style.careerDate}>الوظيفة الحالية</h5>
                    <p className={style.job}>{provider?.current_job}</p>
                    <h5 className={style.careerDate}>النوع</h5>
                    <p className={style.job}>{provider?.gender !== "male"? "انثي" : "ذكر"}</p>
                    <h5 className={style.careerDate}> نبذه </h5>
                    <p>{provider?.description}</p>
                     
                </div>
                </section>
                </div>
           
        </div>
    )
}
