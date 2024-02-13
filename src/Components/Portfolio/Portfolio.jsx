import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Careerverse from "../../img/careerverse.png"
import Vidtube from "../../img/vidtube.png"
import Netflix from "../../img/netflix.png"
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
                <a href="https://main--doflix.netlify.app/" target="_blank"><img src={Netflix} alt="" /></a>
                
                <a className='a' href="https://github.com/rajeev-30/Netflix-Ui-Clone" target="_blank">Github</a>
            </SwiperSlide>
            <SwiperSlide className='project-details'>
                <a href="https://vidtube-playvideo.netlify.app/" target="_blank">
                <img src={Vidtube} alt="" />
                </a>
                <a className='a' href="https://github.com/rajeev-30/youTube-UI-Clone" target="_blank">Github</a>
            </SwiperSlide>

            <SwiperSlide className='project-details'>
                <a href="">
                <img src={Carrental} alt="" />
                </a>
                <a className='a' href="https://github.com/rajeev-30/bookMyRide" target="_blank">Github</a>
            </SwiperSlide>

            <SwiperSlide className='project-details'>
                <a href="https://careerverseweb.netlify.app/" target="_blank">
                <img src={Careerverse} alt="" />
                </a>
                <a className='a' href="https://github.com/rajeev-30/CareerVerse" target="_blank">Github</a>
            </SwiperSlide>

            <SwiperSlide className='project-details'>
                <a href="https://rajjjeevportfolio.netlify.app/" target="_blank">
                <img src={Portfolio_rajeev} alt="" />
                </a>
                <a className='a' href="https://github.com/rajeev-30/portfolio" target="_blank">Github</a>
            </SwiperSlide >

            <SwiperSlide className='project-details'>
                <a href="https://adventurewebb.netlify.app/" target="_blank">
                <img src={Adventure} alt="" />
                </a>
                <a className='a' href="https://github.com/rajeev-30/Advanture" target="_blank">Github</a>
            </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default Portfolio