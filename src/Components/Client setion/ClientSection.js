import React from 'react'
import './ClientSection.scss'
import { ImQuotesRight } from 'react-icons/im'

export default function ClientSection() {
    return (
        <section className="client-section">
            <div className="client-section-header">
               <div className="header-wrapper">
                    <h1>Our Clients Speak</h1>
                     <p>Here’s what some of our clients have to say about Leadzen.ai</p>
               </div>
            </div>
            <div className="client-card-section">
                <div className="client-card">
                    <ImQuotesRight className="quote-icon"/>
                    <div className="card-profile-section">
                        <img className="profile-img" src="/images/thejas.png" alt="" />
                        <h5 className="profile-name">Tejas Jagannath</h5>
                        <p className="profile-designation">VP Transactions- Unlistedkart</p>
                    </div>
                    <p className="client-card-description">
                        The quality and the comprehensiveness of the information provided by LeadZen.ai 
                        is very good. We also use their services to improve our conversion rate. Not only 
                        did we get verified information but also it allowed us to get a comprehensive 
                        understanding of our leads and what would work for us. A must try product. 
                    </p>
                </div>
            </div>
        </section>
    )
}
