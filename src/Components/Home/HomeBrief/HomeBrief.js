import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './../../../assets/icons/time.svg'
import img2 from './../../../assets/icons/experience.svg'
import img3 from './../../../assets/icons/req.svg'
import styles from './HomeBrief.module.css'
const HomeBrief = () => {

  return (
    <section className={`${styles["home-brief"]} mt-5`}>
          <div className='container'>
            <div className={`${styles["home-brief_title-container"]} `}>
             <h3  className={`${styles["home-brief_title"]} `}>عن منصه استشارة تك </h3>
             </div>
              <div className='row'>
                  <div className='col-lg-4 col-sm-12'>
                    <div className={`${styles["home-brief_cart"]} `}>
                        <Link class="" to="">
                            <img className={`${styles["home-brief__img"]} `} src={img3} alt="" />
                        </Link>
                        <h4  className={`${styles["home-brief__title"]}`}>أفضل المستشارين</h4>
                        <p className={`${styles["home-brief__pragraph"]}`} >نوفر لكم أفضل المتخصصين في المجال التقني ليساعدوكم في تحقيق أهدافكم وحل مشاكلكم التقنية.</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-12 mb-5'>
                  <div className={`${styles["home-brief_cart"]} `}> 
                        <Link class="" to="/askForVoluntary">
                            <img className={`${styles["home-brief__img"]} `} src={img1} alt="" />
                        </Link>
                        <h4  className={`${styles["home-brief__title"]}`}>سرعة التجاوب</h4>
                        <p className={`${styles["home-brief__pragraph"]}`} >التأخير ليس من أساليبنا، لذلك جعلنا سرعة التجاوب أحد أهم القواعد التي ننطلق من خلالها</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-12 mb-5'>
                  <div className={`${styles["home-brief_cart"]} `}>
                        <Link class="" to="">
                            <img className={`${styles["home-brief__img"]} pb-4`} src={img2} alt="" />
                        </Link>
                        <h4  className={`${styles["home-brief__title"]}`}>الخبرة في القطاع</h4>
                        <p className={`${styles["home-brief__pragraph"]}`} >لدى فريق عمل المنصة خبرة متراكمة في تقنيات القطاع غير الربحي تضمن لك تحقيق احتياجك</p>
                    </div>
                  </div>
              </div>
          </div>
         
    </section>
  )
}

export default HomeBrief