import React from 'react'
import AdvisorsCard from '../../Global/AdvisorsCard/AdvisorsCard'
import style from './Advisors.module.css'
import eng1 from './../../assets/Images/team1.png'
import eng2 from './../../assets/Images/team2.png'
import eng3 from './../../assets/Images/team3.png'
import { BsFillSendFill, BsFillFileEarmarkCheckFill, BsCheckAll } from "react-icons/bs";
export default function Advisors() {
    return (
        <>
            <div className={`${style.path}`}>
                <h4 className='container title' >  العديد من الاستشارات و الخدمات عبر موقعنا</h4>
            </div>
            <div className={`${style.cardAdvisors}`}>
                <AdvisorsCard title="ايمن محمد" text="مهندس كهرباء كابلات و اعطال فنيه للتصليح" img={eng1} />
                <AdvisorsCard title=" الاء انور " text="مهندسه برمجيات و تصميم مواقع الكترونيه" img={eng2} />
                <AdvisorsCard title="  عبدالله احمد " text="مهندسه اجهزه طبيه يعمل لدي المستشفيات" img={eng3} />
                <AdvisorsCard title="ايمن محمد" text="مهندس كهرباء كابلات و اعطال فنيه للتصليح" img={eng1} />
                <AdvisorsCard title=" الاء انور " text="مهندسه برمجيات و تصميم مواقع الكترونيه" img={eng2} />
                <AdvisorsCard title="  عبدالله احمد " text="مهندسه اجهزه طبيه يعمل لدي المستشفيات" img={eng3} />
                <AdvisorsCard title="ايمن محمد" text="مهندس كهرباء كابلات و اعطال فنيه للتصليح" img={eng1} />
                <AdvisorsCard title=" الاء انور " text="مهندسه برمجيات و تصميم مواقع الكترونيه" img={eng2} />
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
