import React, { useEffect, useRef, useState } from 'react'
import InformationSlideCard from './Information Slide card/InformationSlideCard';
import './Information.scss'
let delay = 2500;

export default function Information() {
    const [ index,setIndex ] = useState(1),
        [append,setAppend] = useState(false) 
    const timeoutRef = useRef(null)

    const resetTimeout = () =>{
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(()=>{
        resetTimeout();
        !append && appendAndInsert();
        timeoutRef.current = setTimeout(
            
            () =>{ 
                removeSlideTransition();
                setIndex(currentIndex =>
                currentIndex === 6 ? 1 : currentIndex + 1
                )
            }, delay
        )
        
    },[index])

    const removeSlideTransition = () => {
        const slider = document.querySelector('.information-video-slide')
        slider.style.transition = index === 6 || index === 0 ? "none" : "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)";
        delay = index === 6 || index === 0 ? 0 : 5000;
    }

    const appendAndInsert = () => {
        const slider = document.querySelector('.information-video-slide')
        const slides = document.querySelectorAll('.information-slide-card')
        const firstNode = slides[0].cloneNode(true),
            lastNode = slides[slides.length-1].cloneNode(true)

        slider.appendChild(firstNode);
        slider.insertBefore(lastNode,slides[0])

        setAppend(true)
    }

    return (
        <section className="information-section">
            <div className="information-section-wrapper">
                <h1>From Information to Intelligence</h1>
                <div className={`information-video-slide-wrapper slide-${index*100}`} >
                    <div className="information-video-slide" style={{marginLeft:-index*100+"%"}}>
                        <InformationSlideCard 
                            videoLink="https://leadzen.ai/wp-content/uploads/2021/07/enrich-your-data.webm"
                        />
                        <InformationSlideCard 
                            videoLink="https://leadzen.ai/wp-content/uploads/2021/07/Know-your-prospects.webm"
                        />
                        <InformationSlideCard 
                            videoLink="https://leadzen.ai/wp-content/uploads/2021/07/find-exactly-what-you-are-looking-for.webm"
                        />
                        <InformationSlideCard 
                            videoLink="https://leadzen.ai/wp-content/uploads/2021/07/Get-real-Time-Leads.webm"
                        />
                        <InformationSlideCard 
                            videoLink="https://leadzen.ai/wp-content/uploads/2021/07/Make-criteria-based-searches.webm"
                        />
                    </div>
                </div>
                <ul>
                    <li className={index === 1 || index === 6 ?"information-slider-dot dot-active" : "information-slider-dot"}></li>
                    <li className={index === 2 ?"information-slider-dot dot-active" : "information-slider-dot"}></li>
                    <li className={index === 3 ?"information-slider-dot dot-active" : "information-slider-dot"}></li>
                    <li className={index === 4 ?"information-slider-dot dot-active" : "information-slider-dot"}></li>
                    <li className={index === 5 ?"information-slider-dot dot-active" : "information-slider-dot"}></li>
                </ul>
            </div>
        </section>
    )
}
