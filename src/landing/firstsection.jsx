import React, {useContext} from 'react'
import Nav from '../component/nav';
import { LandingContext } from '../Context';

function FirstSection() {
    const {homeRef} = useContext(LandingContext)

  return (
    <div ref={homeRef} className='first_secCont positive-relative'>
        <Nav />
        <div className="main_cont d-flex justify-content-center">
            <div className="cont d-flex justify-content-between">
                <div className="first">
                    <h1 className='mb-2'>Bringing Tradition Online: The New Marketplace Frontier</h1>
                    <p className='mb-5'>Davkart is A B2B marketplace that empowers Distributors and Small Businesses to run their operations more seamlessly and efficiently. Davkart aggregates the scattered network of small shops, connects them to FMCG manufacturers,
                        wholesalers & Distributors with a network of logistics & End fulfillment services.</p>
                    <button className='p-3'>Download App <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6667 1.66669L25 7.00002M25 7.00002L19.6667 12.3334M25 7.00002H1" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                </div>
                <div className="second position-absolute">
                    <img src="/assets/iPhone 14 Pro Mockup.png" alt="" />
                </div>
                <div className="topo position-absolute">
                    <img src="/assets/Topology-1.png" alt="" />
                </div>
                <div className="design1 position-absolute">
                    <img src="/assets/Burst-star.png" alt="" />
                </div>
                <div className="design2 position-absolute">
                    <img src="/assets/top left.png" alt="" />
                </div>
                <div className="design3 position-absolute">
                    <img src="/assets/top.png" alt="" />
                </div>
                <div className="design4 position-absolute">
                    <img src="/assets/Rectangle 89.png" alt="" />
                </div>
                <div className="design5 position-absolute">                    
                    <img src="/assets/Rectangle 89.png" alt="" />
                    <img src="/assets/Rectangle 89.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstSection