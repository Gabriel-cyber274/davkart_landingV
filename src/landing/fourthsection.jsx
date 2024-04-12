import React from 'react'

function FourthSection() {
  return (
    <div className='fourth_secCont d-flex justify-content-center'>
        <div className="cont d-flex justify-content-between align-items-center">
            <h1>Trusted by industry-leading companies around the globe</h1>
            <div className="industries">
                <marquee scrollamount="30" class="d-flex" behavior="" direction="">
                    <div class="d-flex align-items-center industry">
                        <div className="me-5">
                            <img src="/assets/Page-1.png" alt="" />
                        </div>
                        <div className="me-5">
                            <img src="/assets/indomie_logo.png.png" alt="" />
                        </div>
                        <div className="me-5">
                            <img src="/assets/providusbank_logo.png.png" alt="" />
                        </div>
                        <div className="me-5">
                            <img src="/assets/promasidor_logo.png.png" alt="" />
                        </div>
                        <div className="">
                            <img src="/assets/Page-1.png" alt="" />
                        </div>
                    </div>
                </marquee>  
            </div>
        </div>
    </div>
  )
}

export default FourthSection