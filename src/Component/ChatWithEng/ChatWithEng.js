
import React, { useEffect, useRef, useState } from 'react'
import styles from "./ChatWithEng.module.css"
import "./ChatWithEng.css"
import {IoIosArrowBack} from "react-icons/io"
import avatar from "./../../assets/Images/avatar.png"
import jwt_decode from "jwt-decode";
import axios from 'axios'
import {  useParams } from 'react-router-dom'

const ChatWithEng = () => {
    
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [userId,setUserId] = useState("")
    const [inputMessage,setInputMessage] = useState("")
    const [userDetails,setUserDetails]= useState({})
    const [messages,setMessages] = useState([])
    const [chat,setChat] = useState([])
    const [userType,setUserType] = useState()
    const [userTypeChat,setUserTypeChat] = useState()
    const providerId = useParams()
    const proId = providerId.id
    const getMessagesForm = new FormData();
    const addFileInput = useRef(null)
    const [userName , setUserName] = useState()
    const [chatFileForm,setChatFileForm] = useState({
        chatFile : ''
    })
//     function handleLogo(){
//         let inputFileEvent = document.querySelector(".upload-box")
//         inputFileEvent.click()
//    }
    useEffect(() => {
        const decoded = jwt_decode(token)
        setUserId(decoded.user_id)
        setUserType(decoded.user_type)
  
        axios.get(`https://jobs.invoacdmy.com/provider/single-provider/${proId}`)
        .then((response) => {
            setUserDetails(response.data.data)
            setUserName(response.data.data.name)
          
        }).catch((err)=>{console.log(err)})

 
       
    //      getMessagesForm.append("provider_id",proId);
    //      getMessagesForm.append("user_id",decoded.user_id);
    //     console.log(getMessagesForm,"hi")
    //     axios.post(`https://jobs.invoacdmy.com/chats/get-chat`,getMessagesForm,{
    //     headers: {
    //         "Authorization" : `Bearer ${token}`,
    //         "Accept-Language" : `en`
    //         }
    //     }
    //     )
    //   .then((response) =>{
    //     setMessages(response.data.data)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    // })
        console.log(messages,'mesee')

        axios.get(`https://jobs.invoacdmy.com/chats/get-all-chats`,{
            headers : {
             "Authorization" : `Bearer ${token}`,
            }
        })
        .then((response) => {
            setChat(response.data.data.chats)
            console.log(response.data.data.chats,"dsdsd")
            setUserTypeChat(response.data.data.user_type)
   
        }).catch((err)=>{console.log(err)})



    }, [proId])
    console.log(userTypeChat)
    // let previewUploadResumeFile = (e) => {   
    //     let file = e.target.files[0];
    //     if(!file){
    //       return;
    //     }
    //     setChatFileForm(prevValue=>{ 
    //       return{
    //         ...prevValue,
    //         chatFile : file
    //       } 
    //     })
    //     console.log(chatFileForm,'file')
    //   }

   function handleUserName(username,id){
    setUserName(username)
    console.log(username)
    console.log(id,"idd")
    const decoded = jwt_decode(token)
        
       if(userTypeChat === 'user'){
        getMessagesForm.append("provider_id",id);
        getMessagesForm.append("user_id",decoded.user_id);

       }else {
        console.log(id,"dsdsds")
        getMessagesForm.append("user_id",id);
        getMessagesForm.append("provider_id",decoded.user_id);
       }
      
      console.log(getMessagesForm,"hi")
      axios.post(`https://jobs.invoacdmy.com/chats/get-chat`,getMessagesForm,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Accept-Language" : `en`
          }
      }
      )
    .then((response) =>{
      setMessages(response.data.data)
    })
    .catch((err)=>{
      console.log(err)
  })
   }
    const sendMsg = () =>{
        const messagesNew = {
            myself:true,
            message:inputMessage
        }
        const sendMessagesForm = new FormData();
    
        if(chatFileForm.chatFile){
            sendMessagesForm.append("user_id",userId);
            sendMessagesForm.append("provider_id",proId);
            sendMessagesForm.append("uploaded_message_file", '');
            sendMessagesForm.append("uploaded_message_file", chatFileForm.chatFile);
            sendMessagesForm.append("message_type", '2');
        }else{
            sendMessagesForm.append("user_id",userId);
            sendMessagesForm.append("provider_id",proId);
            sendMessagesForm.append("uploaded_message_file", '');
            sendMessagesForm.append("message", inputMessage);
            sendMessagesForm.append("message_type", '1');
        }
        axios.post(`https://jobs.invoacdmy.com/chats/send-message`,
        sendMessagesForm,
        {
            headers: {
            "Authorization" : `Bearer ${token}`,
            "Accept-Language" : `en`
            }      
    })

    setMessages(messages.concat(messagesNew))
    setInputMessage("")
    }
  return (

    <>
    {/* {userType&&userType === 'provider' ?  */}
       
    <section className={`${styles['chat-with-eng']}`}>
        <div className='container'>
            <div className='row'>
            <div className={`${styles['chat-with-eng__nav']} `}>   
                    <IoIosArrowBack />
                    <h4 >{userName}</h4>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 p-0'>
               <div className='chat-container pt-4 '>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="Open" role="tabpanel" aria-labelledby="Open-tab">
                            <div className="chat-list">

                                
                            {chat&&chat.map((mess,index)=>(
                                userTypeChat === 'user' ?
                                <button type='button' key={index} className="user-chat d-flex align-items-center" onClick={()=>{handleUserName(mess.provider_id?.name,mess.provider_id?._id)}}>
                                    {/* <div className="flex-shrink-0">
                                        <img className="img-fluid" src={mess.provider_id.personal_photo} alt="user img" />
                                         <span className="active"></span>
                                    </div> */}
                                    <div className="button-chat">
                                        <h3>{mess.provider_id?.name} </h3>
                                        <p>{mess?.message}</p>
                                    </div>
                                </button>
                                :
                                <button type='button'  key={index} className="user-chat d-flex align-items-center"  onClick={()=>{handleUserName(mess.user_id?.name,mess.user_id?._id)}}>
                                {/* <div className="flex-shrink-0">
                                    <img className="img-fluid" src={mess.provider_id?.personal_photo} alt="user img" />
                                    <span className="active"></span>
                                </div> */}
                                <div className="button-chat   ">
                                    <h3>{mess.user_id?.name} </h3>
                                    <div>{mess?.message}</div>
                                </div>
                                </button>
                                                

                                                   
                            ))}
                       
                            </div>
                        </div>
                                     
                    </div>

                </div>
            </div>
            <div className={`${styles['chat-with-eng__container']} col-lg-9 col-md-9 col-sm-12 p-0`}>
           
                <div className={`${styles['chat-with-eng__content']}`}>
                    <main className="msger-chat">
                        {messages.map((message,index)=>(
                            
                        <div>
                            {   message?.sender === userType || message.myself === true ? 
                    
                            <div className="msg right-msg mt-2">
                                <div className="msg-space"></div>
                                <div className="msg-bubble">
                                    <div className="msg-info msg-info-right">
                                        <div className="msg-info-name"></div>
                                        <div className="msg-info-time ">12:46</div>
                                    </div>

                                    <div className="msg-text">
                                        {message?.message}
                                    </div>
                                </div>
                            </div>
                            :
                        
                        <div className="msg left-msg mt-2">
                        {/* <div>
                            <img className='msg-img' src={userDetails?.personal_photo} alt='en'/>
                        </div> */}
                        <div className="msg-bubble">
                            <div className="msg-info">
                                <div className="msg-info-name">{userName}</div>
                                <div className="msg-info-time">12:45</div>
                            </div>                  
                            <div className="msg-text">      
                                {message?.message}      
                            </div>
                        </div>
                        </div>
                            }
                            </div>

                    
                            ))}
                        </main>
                        <form className="msger-inputarea">
                            <input type="text" onChange={(e)=>setInputMessage(e.target.value)} value={inputMessage} className="msger-input" placeholder="اكتب رسالتك ..." />
                            {/* <div className="attach" onClick={()=>{handleLogo()}}  >
                                                <div className="button-wrapper" >
                                                        <span className="label">
                                                        <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/upload.svg" alt="image title" /> attached file 
                                                    </span>
                                                    <input
                                                      ref={(e)=>{addFileInput.current = e}}
                                                      onChange={(e)=>{previewUploadResumeFile(e)}}
                                                      type="file" 
                                                      name="chatFile"
                                                      className="upload-box" 
                                                      placeholder="Upload File"
                                                    aria-label="Upload File" />
                                                </div>
                            </div> */}
                            <button type="button" onClick={sendMsg} className="msger-send-btn">ارسال</button>
                        </form>
                </div>
            </div>
            </div>
        </div>  
    </section>
    
    </>
  )
}

export default ChatWithEng