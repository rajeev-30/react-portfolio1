import React from 'react'
import './GitRepo.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'

const GitRepo = () => {
    const repos =[ 
        {
        title: "DSA in Java",
        desc: "A GitHub repository dedicated to Data Structures and Algorithms in java. It covers a comprehensive range, including Arrays, Linked Lists, Stacks, Queues, HashMaps, Binary Trees, Binary Search Trees, Graphs, as well as various sorting and searching algorithms. ",
        source: "Github",
        link: "https://github.com/rajeev-30/DSA-in-Java",
        },

        {
        title: "Complete Java",
        desc: "A GitHub repository covering comprehensive Java concepts, serving as an excellent resource for learning or refreshing Java knowledge. Additionally, it explores Java's Object-Oriented Programming (OOP) concepts.", 
        source: "Github",
        link: "https://github.com/rajeev-30/Complete-Java",

        },

        {
        title: "DSA in C++",
        desc: "A GitHub repository exclusively dedicated to Data Structures and Algorithms in C++. It provides a thorough coverage of topics, Arrays, Linked Lists, Stacks, Queues, Recursion, Binary Trees, Binary Search Trees, Graphs, and includes implementations using the Standard Template Library (STL).",
        source: "Github",
        link: "https://github.com/rajeev-30/DSA-in-CPP"

        },   
        
    ]



  return (

    <div className="t-wrapper" id='GitRepo' >
        <div className="t-heading">
            <div className="repo">
                <span>GitHub </span>
                <span> Repositories </span>
                <span>worth exploring</span>
            </div>
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
            {repos.map((repos, index)=>{
                return(
                    <SwiperSlide key={index}>

                        <div className="gitRepo">
                            {/* <img src={clients.img} alt="" /> */}
                            <span>{ repos.title}</span>
                            <span>{ repos.desc}</span>
                            <a href={ repos.link} target='_blank'>
                                <span>{ repos.source}</span>
                            </a>
                        </div>

                    </SwiperSlide>
                );
            })}
        </Swiper>

    </div>
  )
}

export default GitRepo