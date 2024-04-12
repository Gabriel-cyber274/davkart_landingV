import React, {useContext} from 'react';
import { LandingContext } from '../Context';

function TenthSection() {
    const {contactRef} = useContext(LandingContext);

  return (
    <div className='tenth_secCont d-flex justify-content-center'>
        <div className="cont">
            <h1 ref={contactRef} className='text-center mb-2'>Get In Touch</h1>
            <p className='text-center'>Have any questions, feedback, or concerns? Reach out to us.</p>

            <div  className="contact d-flex justify-content-between">
                <div className="first">
                    <div className="address mb-5 d-flex">
                        <svg className='me-3' width="32" height="46" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 21.7143C14.4845 21.7143 13.031 21.1122 11.9594 20.0406C10.8878 18.969 10.2857 17.5155 10.2857 16C10.2857 14.4845 10.8878 13.031 11.9594 11.9594C13.031 10.8877 14.4845 10.2857 16 10.2857C17.5155 10.2857 18.969 10.8877 20.0406 11.9594C21.1122 13.031 21.7143 14.4845 21.7143 16C21.7143 16.7504 21.5665 17.4935 21.2793 18.1868C20.9921 18.88 20.5712 19.51 20.0406 20.0406C19.51 20.5712 18.8801 20.9921 18.1868 21.2793C17.4935 21.5665 16.7504 21.7143 16 21.7143ZM16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 28 16 45.7143 16 45.7143C16 45.7143 32 28 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0Z" fill="#26CCF0"/>
                        </svg>

                        <div>
                            <h2 className='mb-3'>Address</h2>
                            <h3>82A God’s provide, Amaechi Enugu, Enugu</h3>
                        </div>

                    </div>
                    <div className="address mb-5 d-flex">
                        <svg className='me-3' width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.2 25.6C2.32 25.6 1.56693 25.2869 0.9408 24.6608C0.314667 24.0347 0.00106667 23.2811 0 22.4V3.2C0 2.32 0.3136 1.56693 0.9408 0.9408C1.568 0.314666 2.32107 0.00106667 3.2 0H28.8C29.68 0 30.4336 0.3136 31.0608 0.9408C31.688 1.568 32.0011 2.32107 32 3.2V22.4C32 23.28 31.6869 24.0336 31.0608 24.6608C30.4347 25.288 29.6811 25.6011 28.8 25.6H3.2ZM16 14.4L28.8 6.4V3.2L16 11.2L3.2 3.2V6.4L16 14.4Z" fill="#26CCF0"/>
                        </svg>

                        <div>
                            <h2 className='mb-3'>Email</h2>
                            <h3>Info.davkart@gmail.com</h3>
                        </div>

                    </div>

                    <div className="map position-relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.82764215597!2d7.49355777475235!3d6.416187393574696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a113390781e9%3A0x3f7d386cad2d65d0!2s82%20Amaechi%20St%2C%20Uwani%2C%20Enugu%20400107%2C%20Enugu!5e0!3m2!1sen!2sng!4v1712477498444!5m2!1sen!2sng" style={{border:0, width: '100%', height: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>
                <div className="second py-5">
                    <form action="">
                        <div className='mb-4'>
                            <label className='mb-2' htmlFor="">
                                Name
                            </label>
                            <input type="text" placeholder='Your name' />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2' htmlFor="">
                                Email
                            </label>
                            <input type="email" placeholder='you@gmail.com' />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2' htmlFor="">
                                Phone number
                            </label>
                            <input type="tel" placeholder='+234 (555) 000-0000' />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2' htmlFor="">
                                How can we help?
                            </label>
                            <textarea placeholder='Tell us a how we can help...' name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TenthSection