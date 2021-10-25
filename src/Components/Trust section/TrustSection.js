import React from 'react'
import { useEffect } from 'react'
import "./TrustSection.scss"

export default function TrustSection() {
    const numberOfImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    useEffect(() =>{
        getFirstCards();
    },[])

    const getFirstCards = () => {
        let cards = document.querySelectorAll('.company-card');
        const slide = document.querySelector('.companies-slide');

        let firstCards = [];
        for(let i=0;i<5;i++){
            slide.appendChild(cards[i].cloneNode(true));
        }
    }
    return (
        <section className="trust-section">
            <h1>Trusted By</h1>
            <div className="companies-slide-wrapper">
                <div className="companies-slide">
                    {
                        numberOfImages.map(i =>(
                            <img src={`/images/company ${i}.png`} className="company-card" k={i} alt="" />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
