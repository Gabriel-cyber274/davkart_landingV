import React from 'react'

function EightSection() {
  return (
    <div className='eighth_secCont py-5 d-flex justify-content-center'>
        <div className="cont d-flex justify-content-between align-items-center">
            <div className="first">
                <h1>Get Davkart Now!</h1>
                <p className='mt-3 mb-5'>Join Thousands of Businesses for smarter operations, It’s your turn to thrive with Davkart</p>
                <div className="stores">
                    <a href="">
                        <img className='me-3' src="/assets/App Store.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/assets/Play Store.png" alt="" />
                    </a>
                </div>
            </div>
            <div className="second">
                <img src="/assets/iPhone 12 Pro.png" alt="" />


            </div>
        </div>
    </div>
  )
}

export default EightSection