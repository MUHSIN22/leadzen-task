import React from 'react'
import DemoButton from '../Demo button/DemoButton'
import './GetStart.scss'

export default function Getstart() {
    return (
        <section className="getstart-section">
            <img src="/images/getstart.png" alt="" />
            <img src="/images/getstart mobile.png" className="getstart-mobile" alt="" />
            <div className="get-start-content">
                <h1>Take the Lead Now !</h1>
                <p>Subscribe Now and get 5 Free Credits with the most intelligent AI Powered Real-time Prospecting Engine.</p>
                <DemoButton/>
            </div>
        </section>
    )
}
