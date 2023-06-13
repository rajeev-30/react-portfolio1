import React from 'react'
import './Testinomial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile4.jpg'
import profilePic4 from '../../img/profile1.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'

const Testimonial = () => {
    const clients =[ 
        {
        // img: profilePic1,
        review: "Choosing Rajeev as our website designer was the best decision we made. Their professionalism, expertise, and eye for design helped us create a visually stunning website.",
        name: "- Irshad"
        },

        {
        // img: profilePic2,
        review: "We hired Rajeev to revamp our e-commerce website, and the results were outstanding. Their attention to detail, and technical expertise were truly impressive.",
        name: "- Amrita"

        },

        {
        // img: profilePic3,
        review: "Working with Rajeev was an absolute pleasure. Their ability to understand our business needs resulted in a stunning website that exceeded our expectations. Rajeev is a highly talented and professional website designer.",
        name: "- Rahul"

        },

        // {
        // img: profilePic4,
        // review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, suscipit dolorem. Cumque odio rerum eveniet adipisci beatae repellendus expedita nihil.",
        // name: "- Emma"

        // },
        
    ]



  return (

    <div className="t-wrapper" id='Testimonial' >
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Eception Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>

        {/* Slider  */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        grabCursor={true}
        >
            {clients.map((clients, index)=>{
                return(
                    <SwiperSlide key={index}>

                        <div className="testimonial">
                            {/* <img src={clients.img} alt="" /> */}
                            <span>{ clients.review}</span>
                            <span>{ clients.name}</span>
                        </div>

                    </SwiperSlide>
                );
            })}
        </Swiper>

    </div>
  )
}

export default Testimonial