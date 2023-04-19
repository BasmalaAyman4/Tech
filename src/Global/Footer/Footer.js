import React from 'react'
import './Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { FaFacebook, FaGoogle, FaTwitter, FaWhatsapp, FaHome, FaEnvelope, FaPhone, FaPrint, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Footer() {

    return (
        <>
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center  p-4 border-bottom'>
                  

                    <div className='social-icon text-center'>
                        <Link to='' className='me-4 text-reset '>
                            <FaFacebook  className='facebook' />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaGoogle className='google'  />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaWhatsapp className='whatsapp' />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaTwitter className='twitter'/>
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <FaYoutube className='youtube' />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <FaInstagram className='instagram' />
                        </Link>
                    </div>
                </section>

                <section className='footer-dir' >
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3 footer-body' >

                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4'>
                                نبذه عنا
                                </h6>
                                <hr />
                                <p className='footer_we-are_p'>
                                استشارة تك
                                </p>
                                <p className='footer_we-are_p'>
                                مرحباً بك في أول منصة إلكترونية متخصصة في الإستشارات التقنية للمنظمات غير الربحية، 
                                </p>
                            
                            </MDBCol>



                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4'>الروابط</h6>
                                <hr />
                               
                                <p>
                                    <Link to="/" className='text-reset footer__link'>
                                    الرئيسية
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/advisor" className='text-reset footer__link'>
                                    استشارات
                                    </Link>
                                </p>
                                <p>
                                    <Link  to="/contactUs" className='text-reset footer__link'>
                                    تواصل معنا
                                    </Link>
                                </p>
                                
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4'>الروابط</h6>
                                <hr />
                                <p>
                                    <Link to="/signup-advisor" className='text-reset footer__link'>
                                    تسجيل مستشار 
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/signup" className='text-reset footer__link'>
                                    تسجيل مستفيد
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/askForVoluntary' className='text-reset footer__link'>
                                    تسجيل دخول
                                    </Link>
                                </p>
                            
                            </MDBCol>
                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4' >تواصل معنا</h6>
                                <hr />
                                <p className='footer__contact-us_p'>
                                  " مصر : القاهره , حلوان  "
                                    <FaHome className="me-3 " />
                                </p>
                                <p className='footer__contact-us_p'>

                                    info@example.com
                                    <FaEnvelope className="me-3" />
                                </p>
                                <p className='footer__contact-us_p'>
                                      + 01 234 567 88 <FaPhone className="me-3" />
                                </p>
                                <p className='footer__contact-us_p'>
                                    + 01 234 567 89 <FaPrint className="me-3" />
                                </p>
                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright: 
                    <Link className='text-reset fw-bold ' to='https://mdbootstrap.com/'>
                        Estashara Tech
                    </Link>
                </div>
            </MDBFooter>

        </>
    )
}
