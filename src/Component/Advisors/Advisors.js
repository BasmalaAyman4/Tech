import React, { useEffect, useState } from 'react'
import AdvisorsCard from '../../Global/AdvisorsCard/AdvisorsCard'
import style from './Advisors.module.css'
import eng1 from './../../assets/Images/team1.png'
import eng2 from './../../assets/Images/team2.png'
import eng3 from './../../assets/Images/team3.png'
import { BsFillSendFill, BsFillFileEarmarkCheckFill, BsCheckAll } from "react-icons/bs";
import { Form } from 'react-bootstrap'
import axios from 'axios'

export default function Advisors() {

    const [categoriesArray,setCategoriesArray]= useState([])
    const [providersArray,setProvidersArray]= useState([])
    const [specializationId,setSpecializationId] = useState()
    const [filterLink,setfilterLink] = useState('')

//    const [providersFilter,setProvidersFilter]=useState([])
    
    const handleFilterProviders = (e) => {
        setSpecializationId(e.target.value)
        console.log(e.target.value)
        e.target.value === '' ? 
           setfilterLink("https://jobs.invoacdmy.com/provider/all-providers?page=1") 
           : 
           setfilterLink(`https://jobs.invoacdmy.com/provider/all-category-providers/${e.target.value}`) 
     
    }
      
    useEffect(() => {

        axios.get(filterLink,{
            headers: {
              "Accept-Language" : `ar`
            }
          })
          .then(response => 
             setProvidersArray(response.data.data.data)
        )
        .catch((err)=>{console.log(err)})
        
    },[filterLink])
    
    useEffect(() => {

        axios.get("https://jobs.invoacdmy.com/category/all-categories",
        {headers: {"Accept-Language" : `ar`}})
        .then(response => 
           setCategoriesArray(response.data.data)
        ).catch((err)=>{console.log(err)})

        
        axios.get("https://jobs.invoacdmy.com/provider/all-providers?page=1",{
            headers: {
              "Accept-Language" : `ar`
            }
          })
          .then(response => 
             setProvidersArray(response.data.data.data)
        )
        .catch((err)=>{console.log(err)})

    },[])


    return (
        <>
            <div className={`${style.path}`}>
                <h4 className='container title' >  العديد من الاستشارات و الخدمات عبر موقعنا</h4>
            </div>
            <div className='mt-5 mb-5'>
                <Form.Select 
                    className={`${style['category__form-select']}`}
                    aria-label="Specialization"
                    value={specializationId}
                    onChange={handleFilterProviders}    
                    >   
                        <option value=''>جميع التخصصات</option>
                        {categoriesArray&&categoriesArray.map(category=>(
                        <option value={category.id}  key={category.id} >{category.title}</option>
                    ))}
                </Form.Select>
            </div>
            <div className='container'>
                <div className={`${style.cardAdvisors}`}>
                    <div className='row'>
                        {providersArray&&providersArray.map(provider=>(
                        <AdvisorsCard id={provider.id} key={provider.id} title={provider.name} text={provider.description} img={provider.personal_photo} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${style.helpYou}`} >
                <h3 className={`${style.helpYou__title} container`}>في الإستشارات التقنية نعمل على تحويل أفكار المنتجات الرقمية لأعمال واقعية متكاملة بجودة عالية</h3>
                <div className={`${style.helpYou__icon} container`} dir="rtl">
                    <div className={`${style.helpYou__send}`}>
                        <BsFillSendFill className={`${style.send}`} />
                        <h4>أرسل إستشارة تقنية</h4>
                        <p>أرسل طلب إستشارتك</p>
                    </div>
                    <div className={`${style.helpYou__send}`}>
                        <BsFillFileEarmarkCheckFill className={`${style.send}`} />
                        <h4>نستلم طلب الإستشارة التقنية</h4>
                        <p>نستلم طلبك ونهتم بتفاصيله وسنتواصل معك</p>
                    </div>
                    <div className={`${style.helpYou__send}`}>
                        <BsCheckAll className={`${style.send}`} />
                        <h4>نرسل لك التقرير الكامل</h4>
                        <p>نرسل لك تقرير مفصل كامل كل ما يخص مشروعك</p>
                    </div>

                </div>
            </div>
        </>
    )
}
