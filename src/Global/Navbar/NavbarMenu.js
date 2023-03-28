import React, { useContext, useEffect, useState} from 'react'
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
import { Link, NavLink, useLocation} from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import x from "./../../assets/Images/logo.png"
import { MdNotificationsActive } from "react-icons/md";
import { useRef } from 'react';
import Logo from "./../../assets/Images/logo.png"
import { AuthContext } from '../../Context/AuthContext';

const NavbarMenu = () => {
    const location = useLocation()
       
  
   
    const toggleNav = useRef();
    const [NavbarSide, setNavbarSide] = useState(false)
    const [openCases, setOpenCases] = useState(false);
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
                                            <NavLink className="nav-link" to="/" href="index.html">الرئيسية" </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/projects" href="index.html">المشاريع" </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                onClick={() => setOpenCases(!openCases)}
                                                aria-controls="Cases"
                                                aria-expanded={openCases}
                                            >
                                                 الحالات

                                            </NavLink>
                                            <Collapse in={openCases}>
                                                <div id="Cases">
                                                    <ul className=" nav-side_dropdown  "  >
                                                        <li>  <Link className="dropdown-item" to="/ShopCategory"> حالات إنسانية"

                                                        </Link> </li>
                                                        <li> <Link className="dropdown-item" to="/ProductDetails"> حالات طبية" </Link></li>

                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                onClick={() => setOpenSponsorships(!openSponsorships)}
                                                aria-controls="Sponsorships"
                                                aria-expanded={openSponsorships} >
                                                الكفالات"

                                            </NavLink>
                                            <Collapse in={openSponsorships}>
                                                <div id="Sponsorships">
                                                    <ul className=" nav-side_dropdown " >
                                                        <li>  <Link className="dropdown-item" to="/Blog"> كفالة يتيم" </Link></li>
                                                        <li>  <Link className="dropdown-item" to="/BlogDetails"> كفالة أسرة"</Link></li>
                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/event" href="index.html"> المناسبات"</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html">   جمعيات  خيرية"</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html">صندوق علمني " </NavLink>
                                        </li>

                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html">حاسبة الزكاة"   </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html"> كيف اتبرع ؟ "</NavLink>
                                        </li>

                                        <li>
                                            <NavLink className="nav-link" to="/sign-up" href="index.html"> تسجيل"  </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/login" href="index.html"> تسجيل الدخول"  </NavLink>
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
                                    <NavLink to="/projects" className={`${styles.mainNav__link} main-nav__link`}> استشارات </NavLink>
                                    <NavLink to="/projects" className={`${styles.mainNav__link} main-nav__link`}> تواصل معنا </NavLink>
                                    <div className="dropdown">
                                        <NavLink className={`${styles.mainNav__link}  nav-item nav__item  nav-link`}  > تسجيل حساب</NavLink>

                                        <div className="dropdown-menu show nav__dropdown-list">
                                            <Link className="dropdown-item" to="/Login"> تسجيل مستشار </Link>
                                            <Link className="dropdown-item" to="/Register">   تسجيل مستفيد</Link>
                                        </div>
                                    </div>
                                    <NavLink to="/projects" className={`${styles.mainNav__link} main-nav__link`}> تسجيل دخول</NavLink>
                               


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