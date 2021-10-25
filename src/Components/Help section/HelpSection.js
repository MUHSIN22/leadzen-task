import React from 'react'
import { useState } from 'react'
import HelpWrapper from './Help Wrapper/HelpWrapper'
import './HelpSection.scss'

export default function HelpSection() {
    const [ helpIndex , setHelpIndex ] = useState(0)
    const btnClass = 'btn-help'
    
    return (
        <section className="help-section">
            {
                helpIndex === 0 ? 
                    <HelpWrapper
                        subHeading = "Break your sales record"
                        description = "Instantly find your next loyal customer and boost your company’s sales by getting top leads across various sectors."
                        image = "/images/Sales.svg"
                    />
                :(helpIndex === 1)?
                    <HelpWrapper
                        subHeading = "Build your brand"
                        description = "Use hyper targeted marketing and leverage your competition’s content to gain access to new target audiences. "
                        image = "/images/Marketing.svg"
                    />
                :(helpIndex === 2)?
                    <HelpWrapper
                        subHeading = "Bring in the best talent"
                        description = "Directly target industry professionals and hire only the most suitable talent for your team. "
                        image = "/images/Recruiting.svg"
                    />
                :(helpIndex === 3)?
                    <HelpWrapper
                        subHeading = "Do much more"
                        description = "From skip tracing and identity resolution to due diligence, Lead-gen offers accurate, real-time data to meet all of your business needs. "
                        image = "/images/help1.svg"
                    />
                : null
            }             

            <div className="help-btn-wrapper">
                <button 
                    className={helpIndex === 0 ? btnClass+" btn-active":btnClass}
                    onClick={() => setHelpIndex(0)}
                    >Sales</button>
                <button 
                    className={helpIndex === 1 ? btnClass+" btn-active":btnClass}
                    onClick={()=> setHelpIndex(1)}
                    >Marketing</button>
                <button 
                    className={helpIndex === 2 ? btnClass+" btn-active":btnClass}
                    onClick={()=>setHelpIndex(2)}
                    >Talent Acquisition</button>
                <button 
                    className={helpIndex === 3 ? btnClass+" btn-active":btnClass}
                    onClick={()=>setHelpIndex(3)}
                    >more...</button>
            </div>
            <ul>
                <li className="help-slide-dot"></li>
                <li className="help-slide-dot"></li>
                <li className="help-slide-dot"></li>
                <li className="help-slide-dot"></li>
                <li className="help-slide-dot"></li>
            </ul>
        </section>
    )
}
