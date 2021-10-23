import React from 'react'
import './RecommendSection.scss';

export default function RecommendSection() {
    return (
        <section className="recommend-section">
            <img src="/images/line yellow with double bullet.svg" className="line-yellow-double-bullet" alt="" />
            <h1>LeadZen.ai Recommends</h1>
            <p>Based on searches you have made in the past, our smart data model learns exactly what you’re looking for and recommends only the most relevant leads to help your business prosper. </p>
            <img src="/images/recommendation.png" className="recommend-image" alt="" />
            <img src="/images/recommend image mobile.png" className="recommend-image-mobile" alt="" />
        </section>
    )
}
