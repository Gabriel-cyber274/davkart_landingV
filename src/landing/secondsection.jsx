import React from 'react'

function SecondSection() {
  return (
    <div className='second_secCont d-flex justify-content-center'>
        <div className="cont">
            <div className="first d-flex justify-content-between">
                <h1>Elevate Your Operations with Davkart</h1>
                <p>With Davkart, our broad users can elevate their operations, 
                    enhance efficiency, discover new avenue for growth, Extend their influence and unleash their full potential.</p>
            </div>
            <div className="second d-flex justify-content-between">
                <div className="box box1 me-3 px-3 py-4">
                    <img src="/assets/Frame 19560.png" alt="" />
                    <h2 className='my-4'>Marketplace Connection</h2>
                    <h5>Davkart’s marketplace directly and conveniently connects retailers to FMCG producers and wholesalers, significantly facilitating business.</h5>
                </div>
                <div className="box box2 me-3 px-3 py-4">
                    <img src="/assets/Frame 19560 (1).png" alt="" />
                    <h2 className='my-4'>Sales Revolution</h2>
                    <h5>Davkart digitizes sales, creating a user-friendly interface and comprehensive retailer network to eliminate traditional marketplace inefficiencies.</h5>
                </div>
                <div className="box box3 px-3 py-4">
                    <img src="/assets/Frame 19560 (2).png" alt="" />
                    <h2 className='my-4'>Embedded Finance </h2>
                    <h5>Pay for Goods,Resell digital services like Airtime,data,& fund mobile wallet all from the comfort of your phone</h5>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SecondSection