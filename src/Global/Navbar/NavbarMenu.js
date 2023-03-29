import React, { useContext, useEffect, useState } from 'react'
import styles from './NavbarMenu.module.css'
import './NavbarMenu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import x from "./../../assets/icons/x.svg"
import { MdNotificationsActive } from "react-icons/md";
import { useRef } from 'react';
import Logo from "./../../assets/Images/logo.png"
import { AuthContext } from "../../Context/AuthContext";

const NavbarMenu = () => {
    const location = useLocation()



    const toggleNav = useRef();
    const [NavbarSide, setNavbarSide] = useState(false)
    const [openSponsorships, setOpenSponsorships] = useState(false);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        setNavbarSide(false)
    }, [location])

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }

    return (
        <>
            <header>
                <Container>
                    <div className={`${styles.header}`}>
                        <nav className={`${styles.navLink__header}`}>
                            {/* {authContext.auth.email ? <Link to="/" className={`px-3 pt-2 ${styles.header__link}`} onClick={logout}>تسجيل خروج"</Link> : <Link to="/login" className={`px-3 pt-2 ${styles.header__link}`} > تسجيل الدخول"</Link>}
                            {authContext.auth.email ? <Link to="" className={`px-3 pt-2 ${styles.header__link}`}> تبرعاتي"</Link> : <Link to="/sign-up" className={`px-3 pt-2 ${styles.header__link}`}> تسجيل"</Link>} */}
                            {/* <Link to="" className={`px-3 pt-2 ${styles.header__link}`}> تسجيل الدخول </Link> */}

                        </nav>
                        <div className={`pt-2 ${styles.social}`}>
                            <span className='px-2'><BsFacebook /></span>
                            <span className='px-2'><BsYoutube /></span>
                            <span className='px-2'><BsInstagram /></span>
                            <span className='px-2'><BsTwitter /></span>
                        </div>
                    </div>
                </Container>
            </header>

            {['sm'].map((expand) => (

                <Navbar key={expand} expand={expand} className={`${styles.nav}`}>
                    <Container >

                        <div className="nav-dropdown">
                            <button type="button" className="Nav-button" onClick={() => { setNavbarSide(true) }} variant="success" id="basic-navbar-nav">
                                <span className="icon-bar"></span>
                            </button>

                            <div ref={toggleNav} className={NavbarSide ? "navbar-toggle show-nav" : "navbar-toggle"} >
                                <div className="nav-side">
                                    <div className="side__close " >
                                        <button onClick={() => { setNavbarSide(false) }} className="btn side__close-button  ">
                                            <img src={x} alt="" className="side__close__svg" />
                                        </button>
                                    </div>

                                    <ul className="nav-side__list pt-3">
                                        <li>
                                            <NavLink className="nav-link nav-link__nav-toggle" to="/" href="index.html">الرئيسية </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link nav-link__nav-toggle" to="/projects" href="index.html">استشارات </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link nav-link__nav-toggle" to="/event" href="index.html">  تواصل معنا </NavLink>
                                        </li>

                                        <li>
                                            <p
                                                className="nav-link nav-link__nav-toggle"
                                                onClick={() => setOpenSponsorships(!openSponsorships)}
                                                aria-controls="Sponsorships"
                                                aria-expanded={openSponsorships} >
                                                تسجيل حساب

                                            </p>
                                            <Collapse in={openSponsorships}>
                                                <div id="Sponsorships">
                                                    <ul className=" nav-side_dropdown " >
                                                        <li>  <NavLink className="dropdown-item dropdown-item__nav-toggle" to="/Blog"> تسجيل مستشار  </NavLink></li>
                                                        <li>  <NavLink className="dropdown-item  dropdown-item__nav-toggle" to="/BlogDetails"> تسجيل مستفيد</NavLink></li>
                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </li>

                                        <li>
                                            <NavLink className="nav-link nav-link__nav-toggle" to="/tgf" href="index.html"> تسجيل دخول</NavLink>
                                        </li>




                                    </ul>


                                </div>
                                <div className="other-side" onClick={() => { setNavbarSide(false) }}>
                                </div>
                            </div>


                        </div>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Body>
                                <Nav className={` flex-grow-1 p-2 ${styles.nav__dir} `} >
                                    <NavLink to="/" className={`${styles["main-nav__link"]} main-nav__link`}>الرئيسية</NavLink>
                                    <NavLink to="/advisor" className={`${styles.mainNav__link} main-nav__link`}> استشارات </NavLink>
                                    <NavLink to="/project" className={`${styles.mainNav__link} main-nav__link`}> تواصل معنا </NavLink>
                                    {authContext.auth.email ? <NavLink className={`${styles.mainNav__link}  nav-item nav__item  nav-link`}  > حسابي </NavLink> : <div className="dropdown">
                                        <NavLink className={`${styles.mainNav__link}  nav-item nav__item  nav-link`}  > تسجيل حساب</NavLink>

                                        <div className="dropdown-menu show nav__dropdown-list">
                                            <Link className="dropdown-item" to="/signup-advisor"> تسجيل مستشار </Link>
                                            <Link className="dropdown-item" to="/signup">   تسجيل مستفيد</Link>
                                        </div>
                                    </div>}
                                    {authContext.auth.email ? <NavLink to="/" className={` ${styles.mainNav__link} main-nav__link`} onClick={logout}>تسجيل خروج"</NavLink> : <NavLink to="/login" className={`${styles.mainNav__link} main-nav__link`}> تسجيل دخول</NavLink>}



                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand to="#" className='navbrand'>
                            <img src={Logo} alt='' className={styles.logo} />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            ))
            }


        </>

    )
}

export default NavbarMenu