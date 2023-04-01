import React, { useState, useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Chat.module.css'

export default function Chat() {
  
    const [modalShow, setModalShow] = useState(false)
    function MyVerticallyCenteredModal(props) {
        const [token,setToken] = useState("")
        useEffect(() => {
            setToken(localStorage.getItem('token'))
            
        }, [token])
        return (

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={`${style.modal}`}
            >
                <Modal.Body className={`${style.modal__bodyy}`} >
                    {!token ?  <p className={`${style.para}`}> يجب تسجيل دخول للتواصل معنا <a href='/login' className={`${style.link}`}> تسجل دخول</a></p> : null}
                </Modal.Body>
            </Modal>
        );
    }
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)} className={`${style.btn}`}>
                <span className={`${style.modal__para}`}>  التواصل مباشر </span>
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
