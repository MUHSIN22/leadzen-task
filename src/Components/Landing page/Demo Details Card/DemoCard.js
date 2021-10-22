import React from 'react'
import './DemoCard.scss';
import { BsPersonCheck } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';


export default function DemoCard({text,icon}) {
    return (
        <section className="demo-details-card"> 
            <div className="card-image-wrapper">
                {
                icon === 1?
                    <BiTimeFive/>
                    :(icon === 2)?
                        <BsPersonCheck/> 
                            :
                            <HiOutlineLocationMarker/>
                }
            </div>
            <p className="demo-card-content">
                {text}
            </p>
        </section>
    )
}
