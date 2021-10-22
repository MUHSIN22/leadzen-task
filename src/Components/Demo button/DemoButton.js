import React from 'react'
import './DemoButton.scss';

export default function DemoButton({children}) {
    return (
        <button className="btn-demo">
            {children?children:"Get Started with a Demo "}   
        </button>
    )
}
