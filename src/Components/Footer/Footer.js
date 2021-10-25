import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="info-section">
                    <img src="/images/footer-logo.png" alt="" />
                    <p>
                        Leadzen.ai is the most intelligent lead generation tool as it integrates 
                        artificial intelligence and real-time updates into the prospecting process. 
                    </p>
                    <ul className="social-links">
                        <li>
                           <ImFacebook/>
                        </li>
                        <li>
                           <AiOutlineTwitter/>
                        </li>
                        <li>
                           <GrLinkedinOption/>
                        </li>
                        <li>
                            <BsInstagram/>
                        </li>
                    </ul>
                    <p className="mail-support">support@leadzen.ai</p>
                </div>
                <div className="footer-links">
                    <h2>leadzen.ai</h2>
                    <ul>
                        <li>Why Us</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                        <li>Book a Demo</li>
                    </ul>
                </div>
                <div className="for-links">
                    <h2>leadzen.ai For</h2>
                    <ul>
                        <li>Sales</li>
                        <li>Marketing</li>
                        <li>Talent Acquisition</li>
                        <li>So much more</li>
                    </ul>
                </div>
                <div className="blog-section">
                    <p>Blogs</p>
                    <button className="btn-pricing">Pricing</button>
                </div>
            </div>
        </footer>
    )
}
