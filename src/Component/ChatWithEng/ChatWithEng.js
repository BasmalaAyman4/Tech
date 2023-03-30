import React from 'react'
import styles from "./ChatWithEng.module.css"
import "./ChatWithEng.css"
import {IoIosArrowBack} from "react-icons/io"
import { Dropdown } from 'react-bootstrap'
import avatar from "./../../assets/Images/avatar.png"
const ChatWithEng = () => {


  return (
    <section className={`${styles['chat-with-eng']}`}>
        <div className='container'>
            <div className={`${styles['chat-with-eng__container']}`}>
                  <div className={`${styles['chat-with-eng__nav']} container`}>
                    
                      <IoIosArrowBack />
                      <h4 >محمد سالم</h4>
                  
                  </div>
                  <div className={`${styles['chat-with-eng__content']}`}>
                   
                      <main class="msger-chat">
                        <div class="msg left-msg">
                        <div
                        
                         
                        >
                            <img className='msg-img' src={avatar} alt='en'/>
                        </div>

                        <div class="msg-bubble">
                            <div class="msg-info">
                            <div class="msg-info-name">محمد</div>
                            <div class="msg-info-time">12:45</div>
                            </div>

                            <div class="msg-text">
                            😄 عامل ايه 
                            </div>
                        </div>
                        </div>

                        <div class="msg right-msg">
                        <div
                        class="msg-space"
                   
                        ></div>

                        <div class="msg-bubble">
                            <div class="msg-info msg-info-right">
                            <div class="msg-info-name"></div>
                            <div class="msg-info-time ">12:46</div>
                            </div>

                            <div class="msg-text">
                              الحمدلله و انت؟
                            </div>
                        </div>
                        </div>
                        <div class="msg left-msg">
                        <div
                        
                         
                        >
                            <img className='msg-img' src={avatar} alt='en'/>
                        </div>

                        <div class="msg-bubble">
                            <div class="msg-info">
                            <div class="msg-info-name">محمد</div>
                            <div class="msg-info-time ">12:45</div>
                            </div>

                            <div class="msg-text">
                            بخير
                            </div>
                        </div>
                        </div>
                   </main>

                        <form class="msger-inputarea">
                            <input type="text" class="msger-input" placeholder="اكتب رسالتك ..." />
                            <button type="submit" class="msger-send-btn">ارسال</button>
                        </form>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ChatWithEng