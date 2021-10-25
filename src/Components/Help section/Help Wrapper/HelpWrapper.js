import React from 'react'
import './HelpWrapper.scss'

export default function HelpWrapper({subHeading, description, image}) {
    return (
        <div className="help-wrapper">
            <div className="help-contents">
                <h1>Leadzen.ai Can Help You</h1>
                <h3>{subHeading}</h3>
                <p>{description}</p>
                <img src= {image} alt="" />
            </div>          
        </div>
    )
}
