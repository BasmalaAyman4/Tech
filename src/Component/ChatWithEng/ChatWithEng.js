import React, { useEffect, useState } from 'react'
import styles from "./ChatWithEng.module.css"
import "./ChatWithEng.css"
import {IoIosArrowBack} from "react-icons/io"
import avatar from "./../../assets/Images/avatar.png"

const ChatWithEng = () => {
    
    const [token,setToken] = useState("")

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token])
  return (
    <section className={`${styles['chat-with-eng']}`}>
        <div className='container'>
            <div className={`${styles['chat-with-eng__container']}`}>
                <div className={`${styles['chat-with-eng__nav']} container`}>   
                      <IoIosArrowBack />
                      <h4 >محمد سالم</h4>
                </div>
                <div className={`${styles['chat-with-eng__content']}`}>
                      <main className="msger-chat">
                            <div className="msg left-msg">
                                <div>
                                    <img className='msg-img' src={avatar} alt='en'/>
                                </div>
                                <div className="msg-bubble">
                                    <div className="msg-info">
                                        <div className="msg-info-name">محمد</div>
                                        <div className="msg-info-time">12:45</div>
                                    </div>                  
                                    <div className="msg-text">
                                    😄 عامل ايه 
                                    </div>
                                </div>
                            </div>

                            <div className="msg right-msg">
                                <div className="msg-space"></div>
                                <div className="msg-bubble">
                                    <div className="msg-info msg-info-right">
                                        <div className="msg-info-name"></div>
                                        <div className="msg-info-time ">12:46</div>
                                    </div>

                                    <div className="msg-text">
                                    الحمدلله و انت؟
                                    </div>
                                </div>
                            </div>
                            <div className="msg left-msg">
                                <div>
                                    <img className='msg-img' src={avatar} alt='en'/>
                                </div>

                                <div className="msg-bubble">
                                    <div className="msg-info">
                                    <div className="msg-info-name">محمد</div>
                                    <div className="msg-info-time ">12:45</div>
                                    </div>

                                    <div className="msg-text">
                                    بخير
                                    </div>
                                </div>
                            </div>
                            
                            <div className="msg right-msg">
                                <div className="msg-space"></div>

                                <div className="msg-bubble">
                                    <div className="msg-info msg-info-right">
                                        <div className="msg-info-name"></div>
                                        <div className="msg-info-time ">12:46</div>
                                    </div>

                                    <div className="msg-text">
                                    دايما
                                    </div>
                                </div>
                            </div>
                            
                            <div className="msg right-msg">
                                <div className="msg-space">
                                </div>
                                <div className="msg-bubble">
                                    <div className="msg-info msg-info-right">
                                        <div className="msg-info-name"></div>
                                        <div className="msg-info-time ">12:46</div>
                                    </div>
                                    <div className="msg-text">
                                    ايه الدنيا
                                    </div>
                                </div>
                            </div>
                            <div className="msg left-msg">
                                <div>
                                    <img className='msg-img' src={avatar} alt='en'/>
                                </div>
                                <div className="msg-bubble">
                                    <div className="msg-info">
                                        <div className="msg-info-name">محمد</div>
                                        <div className="msg-info-time ">12:45</div>
                                    </div>

                                    <div className="msg-text">
                                    اهو ماشيه
                                    </div>
                                </div>
                            </div>
                        </main>
                        <form className="msger-inputarea">
                            <input type="text" className="msger-input" placeholder="اكتب رسالتك ..." />
                            <button type="submit" className="msger-send-btn">ارسال</button>
                        </form>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default ChatWithEng