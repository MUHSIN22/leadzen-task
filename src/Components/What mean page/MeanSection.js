import React from 'react'
import './MeanSection.scss'

export default function MeanSection() {
    return (
        <section className="mean-section">
            <div className="mean-section-wrapper">
                <h1>We Get What You Mean</h1>
                <p>
                    Our NLP (Natural Language Processing) based AI engine understands queries, statements and keywords to provide you with the specific datasets you are looking for.
                </p>
                <video autoplay="" loop="" mute="" width="100%" height="360">
                    <source src="https://leadzen.ai/wp-content/uploads/2021/07/we-get-what-you-mean-NLP.webm"/>
                </video>
                <img src="/images/search.png" className="image-1" alt="" />
                <img src="/images/document.png" className="image-2" alt="" />
                <img src="/images/email.png" className="image-3" alt="" />
                <img src="/images/document.png" className="image-4" alt="" />
            </div>            
        </section>
    )
}
