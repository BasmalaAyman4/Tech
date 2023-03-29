import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeWhatWeDo.css"
import img1 from "./../../../assets/Images/whatwedo1.webp"
import img4 from "./../../../assets/Images/whatwedo4.webp"
import img3 from "./../../../assets/Images/whatwedo3.webp"
import {AiOutlineArrowLeft} from "react-icons/ai";
const HomeWhatWeDo = () => {
  return (
    <section className="Latest-news  mt-5 mb-2 pb-3">
    <div className="container">
         <div className='Latest-news__title-conainer'>
           <h3 className="trending-product__head pb-3">نقدم لك أفكارا ابداعية </h3>
         </div>
        <div className="row pt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card Latest-news__card">
                    <img className="card-img-top" src={img1} alt="" />
                    {/* <ul className="Latest-news__header pt-4">
                        <li><Link href="#">By Admin</Link></li>
                        <li><Link  href="#"><i className="ti-comments-smiley"></i>  2 Comments</Link></li>
                    </ul> */}
                    <div className="card-body pl-0 pt-2 ">
                    
                        <h5 className="card-title  "> تحليل نظام المشروع</h5>
                        <p className="card-text">تحليل النظام المشروع واعداد سيناريوهات المستخدمين للنظام بحيث ستحصل على ملف تحليل كامل متكامل لجميع عناصر نظام المشروع</p>
                        <Link href="blog.html" className="Latest-news__link">اقراء المزيد <AiOutlineArrowLeft/></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card Latest-news__card">
                    <img className="card-img-top" src={img4} alt="" />
                    
                    <div className="card-body pl-0 pt-2 ">
                    
                        <h5 className="card-title  "> تطوير وانشاء المواقع الالكترونية</h5>
                        <p className="card-text">تدعم الخدمة انشاء موقع الكتروني خدماتي ، انشاء متجر الكتروني  ، من خلال هذه الخدمة ستحصل على موقع الكتروني يلبي كافة احتياجات مشروعك ومتطلباته.</p>
                        <Link href="blog.html" className="Latest-news__link">اقراء المزيد <AiOutlineArrowLeft/></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="card Latest-news__card">
                    <img className="card-img-top" src={img3} alt="" />
             
                    <div className="card-body pl-0 pt-2 ">
                    
                        <h5 className="card-title  "> إعداد دراسة جدوى للمشروع </h5>
                        <p className="card-text">نقوم بإعداد دراسة جدوى لمشروعك الإلكتروني ، واذا لديك مشاكل برمجيه في مشروعك تواصل معنا لمساعدتك.</p>
                        <Link href="blog.html" className="Latest-news__link">اقراء المزيد <AiOutlineArrowLeft/></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
</section>

  )
}

export default HomeWhatWeDo