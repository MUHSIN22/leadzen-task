import React from 'react'
import ExtensionSection from '../ExtensionSection/ExtensionSection'
import HelpSection from '../Help section/HelpSection'
import Information from '../information to intelligence/Information'
import Landing from '../Landing page/Landing'
import RecommendSection from '../Recommend section/RecommendSection'
import MeanSection from '../What mean page/MeanSection'
import LeadGeneration from '../LeadGeneration/LeadGeneration';
import TrustSection from '../Trust section/TrustSection'

export default function Home() {
    return (
        <main className="home">
            <Landing/>
            <Information/>
            <HelpSection/>
            <MeanSection/>
            <RecommendSection/>
            <ExtensionSection/>
            <LeadGeneration/>
            <TrustSection/>
        </main>
    )
}
