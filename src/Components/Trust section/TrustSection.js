import React from 'react'
import "./TrustSection.scss"

export default function TrustSection() {
    const numberOfImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    return (
        <section className="trust-section">
            <h1>Trusted By</h1>
            <div className="companies-slide-wrapper">
                <div className="companies-slide">
                    {
                        numberOfImages.map(i =>(
                            <img src={`/images/company ${i}.png`} k={i} alt="" />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
