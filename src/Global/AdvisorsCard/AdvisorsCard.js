import React from 'react'
import { Link } from 'react-router-dom'
import style from "./AdvisorsCard.module.css"
export default function AdvisorsCard(props) {
    return (
        <>
           <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className={`${style.cardDeck} mr-1 ml-1 mb-5 `} dir="rtl">
                    <div className="card mb-5">
                        <img className="card-img-top" src={props.img} alt="Card imagecap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <Link to={`/details/${props.id}`} className="btn btn-outline-secondary" role="button">المزيد من التفاصيل</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
