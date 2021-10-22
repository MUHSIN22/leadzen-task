import React from 'react'
import HelpWrapper from './Help Wrapper/HelpWrapper'
import './HelpSection.scss'

export default function HelpSection() {
    return (
        <section className="help-section">
            <HelpWrapper/>
            <div className="help-btn-wrapper">
                <button className="btn-help">Sales</button>
                <button className="btn-help">Marketing</button>
                <button className="btn-help">Talent Acquisition</button>
                <button className="btn-help">more...</button>
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
