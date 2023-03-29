import React from 'react'
import { Pagination } from 'react-bootstrap';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeHeader.module.css"
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "./../../../assets/Images/banner1.webp"
import banner2 from "./../../../assets/Images/banner2.webp"
import banner3 from "./../../../assets/Images/banner3.jpg"


const HomeHeader = () => {
  return (
    <>
    
      <Swiper navigation={true} modules={[Autoplay,Navigation]}  
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }} 
       
        className="mySwiper mt-2">
        <SwiperSlide>
            <div className={styles['home-header_banner-container']} >
               <img className={styles['home-header_img']} src={banner1} alt="" />
               <div className={`${styles['home-header_banner-content']} text-right`}>
                   <h2>استشارة تك</h2>
                   <p>مرحباً بك في أول منصة إلكترونية متخصصة في الإستشارات التقنية للمنظمات غير الربحية، يجيب على أسئلتك واستفساراتك متخصصين تقنيين بكل احترافية.</p>
               </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>      
            <div className={styles['home-header_banner-container']} >
               <img className={styles['home-header_img']} src={banner2} alt="" />
               <div className={styles['home-header_banner-content']}>
                   <h2>استشارة تك</h2>
                   <p>مرحباً بك في أول منصة إلكترونية متخصصة في الإستشارات التقنية للمنظمات غير الربحية، يجيب على أسئلتك واستفساراتك متخصصين تقنيين بكل احترافية.</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>      
            <div className={styles['home-header_banner-container']} >
               <img className={styles['home-header_img']} src={banner3} alt="" />
               <div className={styles['home-header_banner-content']}>
                   <h2>استشارة تك</h2>
                   <p>مرحباً بك في أول منصة إلكترونية متخصصة في الإستشارات التقنية للمنظمات غير الربحية، يجيب على أسئلتك واستفساراتك متخصصين تقنيين بكل احترافية.</p>
               </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
    
  )
}

export default HomeHeader