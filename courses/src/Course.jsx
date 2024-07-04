import React from 'react'
import "./css/Course.css"

const Course = ({ course }) => {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course-main'>
            <div className='course'>
                <img src={image} width={250} height={150} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺</h3>
                <div className='course-link' ><a href={link}>satın almak için</a> </div>
            </div>
        </div>
    )
}

export default Course

