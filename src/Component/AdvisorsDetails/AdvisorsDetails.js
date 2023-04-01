import React, { useState } from 'react'
import style from "./AdvisorsDetails.module.css"
import eng1 from "./../../assets/Images/team1.png"
import { MdEmail } from "react-icons/md";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Chat from "./../../Global/chat/Chat"
import { NavLink} from 'react-router-dom';
import { useEffect } from 'react';

export default function AdvisorsDetails() {

    const [token,setToken] = useState("")
   
    useEffect(() => {
        setToken(localStorage.getItem('token'))
        
    }, [token])
    return (
        <div className={style.all}>
            {token ? <NavLink to="/chatwithEng" className={`${style.btn}`}> <span className={`${style.modal__para}`}>  التواصل مباشر </span></NavLink> : <Chat />}
            <section className={style.details}>
                <div className={style.advisorsDetails}>
                    <div className={style.name}>
                        <img src={eng1} className={style.img} alt="" />
                        <div>
                            <h4>ايمن محمد</h4>
                            <p>مهندس كهربا</p>
                        </div>
                    </div>
                    <div className={style.contact}>
                        <div className={style.contactIcon}>
                            <p><MdEmail /> john@example.com</p>
                        </div>
                        <div className={style.contactIcon}>
                            <p><BsTwitter /> twitter.com/404</p>
                        </div>
                        <div className={style.contactIcon}>
                            <p><BsGithub /> github.com/404</p>
                        </div>
                        <div className={style.contactIcon}>
                            <p><BsLinkedin /> linkedin.com/in/note</p>
                        </div>
                    </div>
                </div>
                <div className={style.career}>
                    <h4 className={style.careerTitle}>Career Profile:</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={style.career}>
                    <h4 className={style.careerTitle}>Professional Experience :</h4>
                    <h5 className={style.careerDate}>April 2022 - July 2022</h5>
                    <p className={style.job}>Front-End Developer (FREELANCER)</p>
                    <p className={style.jobPara}>- Worked with many people in different countries.</p>
                    <p className={style.jobPara}>- Built different front-end Projects in JavaScript</p>
                    <h5 className={style.careerDate}>April 2022 - July 2022</h5>
                    <p className={style.job}>Front-End Developer (FREELANCER)</p>
                    <p className={style.jobPara}>- Worked with many people in different countries.</p>
                    <p className={style.jobPara}>- Built different front-end Projects in JavaScript</p>
                    <h5 className={style.careerDate}>April 2022 - July 2022</h5>
                    <p className={style.job}>Front-End Developer (FREELANCER)</p>
                    <p className={style.jobPara}>- Worked with many people in different countries.</p>
                    <p className={style.jobPara}>- Built different front-end Projects in JavaScript</p>
                </div>
                <div className={style.career}>
                    <h4 className={style.careerTitle}>Skills:</h4>
                    <div className={style.skills}>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <p>- JavaScript</p>
                        <p>- ReactJs</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
