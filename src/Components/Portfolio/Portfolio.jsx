import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Careerverse from "../../img/careerverse.png"
import Vidtube from "../../img/vidtube.png"
import Carrental from "../../img/carrental.png"
import Adventure from "../../img/adventure.png"
import Portfolio_rajeev from "../../img/portfolio_rajeev.png"
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>

        {/* Heading  */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider  */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            
            <SwiperSlide className='project-details'>
                <img src={Vidtube} alt="" />
                <a href="https://github.com/rajeev-30/youTube-UI-Clone" target="_blank">Github</a>
            </SwiperSlide>

            <SwiperSlide className='project-details'>
                <img src={Carrental} alt="" />
                <a href="https://github.com/rajeev-30/bookMyRide" target="_blank">Github</a>
            </SwiperSlide>

            <SwiperSlide className='project-details'>
                <img src={Careerverse} alt="" />
                <a href="https://github.com/rajeev-30/CareerVerse" target="_blank">Github</a>
            </SwiperSlide>

            <SwiperSlide className='project-details'>
                <img src={Portfolio_rajeev} alt="" />
                <a href="https://github.com/rajeev-30/portfolio" target="_blank">Github</a>
            </SwiperSlide >

            <SwiperSlide className='project-details'>
                <img src={Adventure} alt="" />
                <a href="https://github.com/rajeev-30/Advanture" target="_blank">Github</a>
            </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default Portfolio