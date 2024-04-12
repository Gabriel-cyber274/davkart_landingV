import React, { useRef } from 'react'
import FirstSection from './landing/firstsection';
import SecondSection from './landing/secondsection';
import ThirdSection from './landing/thirdsection';
import FourthSection from './landing/fourthsection';
import FifthSection from './landing/fifthsection';
import SixthSection from './landing/sixthsection';
import SeventhSection from './landing/seventhsection';
import EightSection from './landing/eighthsection';
import NinethSection from './landing/ninethsection';
import TenthSection from './landing/tenthsection';
import Footer from './component/footer';
import { LandingContext } from './Context';

function LandingPage() {
    let homeRef = useRef(null);
    let blogRef = useRef(null);
    let contactRef = useRef(null);
    let aboutRef = useRef(null);
  return (
    <div> 
        <LandingContext.Provider value={{homeRef, blogRef, contactRef, aboutRef}}>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EightSection />
            <NinethSection />
            <TenthSection />
            <Footer />

        </LandingContext.Provider>
    </div>
  )
}

export default LandingPage