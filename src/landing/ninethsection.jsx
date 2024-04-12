import React, {useContext} from 'react'
import App_screens from '../component/appscreens'
import { LandingContext } from '../Context'

function NinethSection() {
    const {blogRef} = useContext(LandingContext)

  return (
    <div className='nineth_secCont d-flex justify-content-center'>
        <div className="cont">
            <div className="first">
                <h1 className='text-center mb-5'>App Screenshots</h1>
                <App_screens />

            </div>
            <div className="second" ref={blogRef}>
                <h1 className='mb-2 text-center'>News & Update</h1>
                <h6 className='text-center mb-5'>Check ot our latest news and update</h6>

                <div className="news">
                    <div className="new">
                        <img src="/assets/Rectangle 16.png" alt="" />
                        <div>
                            <h2>EGYPTIAN B2B E-COMMERCE PLATFORM CARTONA RAISES $12M TO SCALE AND EXPLORE NEW VERTICALS</h2>
                            <p className='mb-3 mt-2'>Startups that solve the supply-chain and operational challenges of players in the fast-moving consumer goods (FMCG) industry — by helping buyers access products from sellers on a 
                                single platform — keep attracting venture capital from investors.</p>
                            <h4>Read More</h4>
                        </div>
                    </div>
                    <div className="new">
                        <img src="/assets/Rectangle 16.png" alt="" />
                        <div>
                            <h2>EGYPTIAN B2B E-COMMERCE PLATFORM CARTONA RAISES $12M TO SCALE AND EXPLORE NEW VERTICALS</h2>
                            <p className='mb-3 mt-2'>Startups that solve the supply-chain and operational challenges of players in the fast-moving consumer goods (FMCG) industry — by helping buyers access products from sellers on a 
                                single platform — keep attracting venture capital from investors.</p>
                            <h4>Read More</h4>
                        </div>
                    </div>
                    <div className="new">
                        <img src="/assets/Rectangle 16.png" alt="" />
                        <div>
                            <h2>EGYPTIAN B2B E-COMMERCE PLATFORM CARTONA RAISES $12M TO SCALE AND EXPLORE NEW VERTICALS</h2>
                            <p className='mb-3 mt-2'>Startups that solve the supply-chain and operational challenges of players in the fast-moving consumer goods (FMCG) industry — by helping buyers access products from sellers on a 
                                single platform — keep attracting venture capital from investors.</p>
                            <h4>Read More</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NinethSection