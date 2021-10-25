import React from 'react'
import './InformationSlideCard.scss'

export default function InformationSlideCard({videoLink}) {
    return (
        <div className="information-slide-card">
            <h5>Enrich Your CRM Data</h5>
            <p>Narrow down your target audience to those that are the perfect fit. With LeadZen.ai, you can search for viable prospects through parameters such as designation, industry, education, company, income group, geography, age, gender and much more.</p>
            
                <video  className="information-video" autoPlay="" loop="" muted="" width="100%" height="460">
                        <source src={videoLink}/>
                 </video>
            
        </div>
    )
}
