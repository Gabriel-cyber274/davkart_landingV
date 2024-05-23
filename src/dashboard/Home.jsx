import React, { useState } from 'react'
import Sidenav from '../component/Sidenav';
import Dashnav from '../component/Dashnav';

function Home() {
    const [isEmpty, setIsEmpty] = useState(true);


    // let date = Date
    console.log(Date.now())
  return (
    <div className="main_dashboard d-flex">
        <Sidenav />
        <div className="main">
            <Dashnav />
            <div className="main_content py-5 px-4">
                <div className="dashboard_home_cont">
                    <div className="header">
                        <h1>Welcome Back! 👋</h1>
                        <h2 className='mt-2'>Good Morning</h2>
                    </div>
                    <div className="first_part row">
                        <div className="col">
                            <div className="box position-relative p-4">
                                <h1>Cynthia Okolie</h1>
                                <h2>Writer/Author</h2>
                                <div className='d-flex align-items-end'>
                                    <h3>40</h3>
                                    <h2 className='ms-2'>Total Post</h2>

                                </div>
                                <img className='position-absolute svg1' src="/assets/b1.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box justify-content-end position-relative p-4">
                                <h2>Total Post</h2>
                                <div className='d-flex align-items-end'>
                                    <h3>40</h3>
                                </div>

                                <img className='position-absolute svg2' src="/assets/notebook 1.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box justify-content-end position-relative p-4">
                                <h2>Comments</h2>
                                <div className='d-flex align-items-end'>
                                    <h3>40</h3>
                                </div>

                                <img className='position-absolute svg2' src="/assets/user-message.png" alt="" />

                            </div>
                        </div>
                    </div>

                    <div className="second_part mt-5">
                        <div className="head_sec d-flex justify-content-between align-items-center">
                            <h1>Recent Blogs</h1>
                            <button><svg className='me-2' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.91498H8V13.915C8 14.1802 7.89464 14.4345 7.70711 14.6221C7.51957 14.8096 7.26522 14.915 7 14.915C6.73478 14.915 6.48043 14.8096 6.29289 14.6221C6.10536 14.4345 6 14.1802 6 13.915V8.91498H1C0.734784 8.91498 0.48043 8.80962 0.292893 8.62208C0.105357 8.43455 0 8.18019 0 7.91498C0 7.64976 0.105357 7.39541 0.292893 7.20787C0.48043 7.02034 0.734784 6.91498 1 6.91498H6V1.91498C6 1.64976 6.10536 1.39541 6.29289 1.20787C6.48043 1.02033 6.73478 0.914978 7 0.914978C7.26522 0.914978 7.51957 1.02033 7.70711 1.20787C7.89464 1.39541 8 1.64976 8 1.91498V6.91498H13C13.2652 6.91498 13.5196 7.02034 13.7071 7.20787C13.8946 7.39541 14 7.64976 14 7.91498C14 8.18019 13.8946 8.43455 13.7071 8.62208C13.5196 8.80962 13.2652 8.91498 13 8.91498Z" fill="#010CA6"/>
                            </svg>
                            Add New</button>
                        </div>
                        <div className='content_blogs'>
                            <div className={`empty mt-3 d-flex justify-content-center align-items-center ${isEmpty && 'd-none' }`}>
                                <img src="/assets/Broken light bulb-amico.png" alt="" />
                            </div>
                            <div className={`blogs mt-5 ${!isEmpty && 'd-none' }`}>
                                <div className="box d-flex align-items-center">
                                    <img className='blog_img' src="/assets/Rectangle 16.png" alt="" />
                                    <div className='ms-4'>
                                        <h1>EGYPTIAN B2B E-COMMERCE PLATFORM CARTONA RAISES $12M TO SCALE AND EXPLORE NEW VERTICALS</h1>
                                        <div className="actions mt-4 d-flex align-items-center">
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 10.5H4.606C4.21094 10.4999 3.82469 10.6168 3.496 10.836L1 12.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H10C10.5304 1.5 11.0391 1.71071 11.4142 2.08579C11.7893 2.46086 12 2.96957 12 3.5V5.5M10 8.5H17C17.5304 8.5 18.0391 8.71071 18.4142 9.08579C18.7893 9.46086 19 9.96957 19 10.5V19.5L16.504 17.836C16.1753 17.6168 15.7891 17.4999 15.394 17.5H10C9.46957 17.5 8.96086 17.2893 8.58579 16.9142C8.21071 16.5391 8 16.0304 8 15.5V10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h2 className='ms-2'>10 Comments</h2>
                                            <svg className='ms-3' width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 7.5C8 8.03043 8.21071 8.53914 8.58579 8.91421C8.96086 9.28929 9.46957 9.5 10 9.5C10.5304 9.5 11.0391 9.28929 11.4142 8.91421C11.7893 8.53914 12 8.03043 12 7.5C12 6.96957 11.7893 6.46086 11.4142 6.08579C11.0391 5.71071 10.5304 5.5 10 5.5C9.46957 5.5 8.96086 5.71071 8.58579 6.08579C8.21071 6.46086 8 6.96957 8 7.5Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19 7.5C16.6 11.5 13.6 13.5 10 13.5C6.4 13.5 3.4 11.5 1 7.5C3.4 3.5 6.4 1.5 10 1.5C13.6 1.5 16.6 3.5 19 7.5Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h2 className='ms-2'>56 Views</h2>
                                            <svg className='ms-3' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.304 5.34399L17.156 8.19599M7 7.49999H4C3.73478 7.49999 3.48043 7.60535 3.29289 7.79289C3.10536 7.98042 3 8.23478 3 8.49999V18.5C3 18.7652 3.10536 19.0196 3.29289 19.2071C3.48043 19.3946 3.73478 19.5 4 19.5H15C15.2652 19.5 15.5196 19.3946 15.7071 19.2071C15.8946 19.0196 16 18.7652 16 18.5V14M18.409 4.08999C18.5964 4.2773 18.745 4.49969 18.8464 4.74445C18.9478 4.98921 19 5.25156 19 5.51649C19 5.78143 18.9478 6.04378 18.8464 6.28854C18.745 6.5333 18.5964 6.75569 18.409 6.94299L11.565 13.787L8 14.5L8.713 10.935L15.557 4.09099C15.7442 3.90353 15.9664 3.75481 16.2111 3.65334C16.4558 3.55186 16.7181 3.49963 16.983 3.49963C17.2479 3.49963 17.5102 3.55186 17.7549 3.65334C17.9996 3.75481 18.2218 3.90353 18.409 4.09099V4.08999Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h2 className='ms-2'>Edit</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home