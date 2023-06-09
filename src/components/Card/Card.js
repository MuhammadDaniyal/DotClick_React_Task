import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

const Card = ({ heading, img, para, price1, price2 }) => {
    return (
        <>
            <div className='card'>
                <div className='card-img-div'>
                    <img src={img} alt="logo-image" />
                    <h3>{heading}</h3>
                </div>
                <div className='card-info-div'>
                    <p style={{ marginBottom: "4px" }}>{para}</p>
                    <div className='card-info-div-inner'>
                        <div>
                            <p>{price1}</p>
                            <p>{price2}</p>
                        </div>
                        <NavLink className={"card-btn"} to={'/'}>Book Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card