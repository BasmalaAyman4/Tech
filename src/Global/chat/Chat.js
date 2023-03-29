import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Chat.module.css'
import { AuthContext } from "../../Context/AuthContext"
export default function Chat() {
    const authContext = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false)
    function MyVerticallyCenteredModal(props) {
        return (

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={`${style.modal}`}
            >
                <Modal.Body className={`${style.modal__bodyy}`} >
                    {authContext.auth.email ? <p>chat</p> : <p className={`${style.para}`}> يجب تسجيل دخول للتواصل معنا <a href='/login' className={`${style.link}`}> تسجل دخول</a></p>}
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
