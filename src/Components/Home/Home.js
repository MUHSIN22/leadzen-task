import React from 'react'
import HelpSection from '../Help section/HelpSection'
import Information from '../information to intelligence/Information'
import Landing from '../Landing page/Landing'
import RecommendSection from '../Recommend section/RecommendSection'
import MeanSection from '../What mean page/MeanSection'

export default function Home() {
    return (
        <main className="home">
            <Landing/>
            <Information/>
            <HelpSection/>
            <MeanSection/>
            <RecommendSection/>
        </main>
    )
}
