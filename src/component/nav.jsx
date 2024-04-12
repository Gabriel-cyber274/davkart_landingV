import React, {useEffect, useContext} from 'react'
import { LandingContext } from '../Context';



function Nav() {
    const {homeRef,  blogRef, contactRef, aboutRef} = useContext(LandingContext)


    
    useEffect(()=> {
        // console.log(secondSecRef.current.getBoundingClientRect().bottom, 'nigg')
        let li = document.querySelectorAll('.landing_Nav li');
        console.log(li)
        li.forEach(element => {
            element.addEventListener('mouseover', ()=> {
                for (let i = 0; i < li.length; i++) {
                    li[i].children[0].classList.remove('on'); 
                }
                element.children[0].classList.add('on');
            });
            element.addEventListener('mouseout', ()=> {
                for (let i = 0; i < li.length; i++) {
                    li[i].children[0].classList.remove('on'); 
                }
                // element.children[0].classList.add('on');
            })

        });
    }, [document]);
  return (
    <>
    
        <div className='landing_Nav py-3 d-flex justify-content-center'>
            <div className="cont d-flex justify-content-between align-items-center">
                <img src="/assets/Davkart Logo full.png" alt="boss" />
                <div className='list'>
                    <ul>
                        <li onClick={()=> homeRef.current.scrollIntoView({behavior: 'smooth'})} className='me-5'>Home
                            <span></span>
                        </li>
                        <li onClick={()=> aboutRef.current.scrollIntoView({behavior: 'smooth'})} className='me-5'>About us
                            <span></span>
                        </li>
                        <li onClick={()=> blogRef.current.scrollIntoView({behavior: 'smooth'})} className='me-5'>Blog
                            <span></span>
                        </li>
                        <li onClick={()=> contactRef.current.scrollIntoView({behavior: 'smooth'})}>Contact us
                            <span></span>
                        </li>
                    </ul>

                    <div className="bars d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.92582C0 1.54694 0.15051 1.18358 0.418419 0.915673C0.686328 0.647763 1.04969 0.497253 1.42857 0.497253H18.5714C18.9503 0.497253 19.3137 0.647763 19.5816 0.915673C19.8495 1.18358 20 1.54694 20 1.92582C20 2.30471 19.8495 2.66807 19.5816 2.93598C19.3137 3.20389 18.9503 3.3544 18.5714 3.3544H1.42857C1.04969 3.3544 0.686328 3.20389 0.418419 2.93598C0.15051 2.66807 0 2.30471 0 1.92582ZM0 9.06868C0 8.6898 0.15051 8.32644 0.418419 8.05853C0.686328 7.79062 1.04969 7.64011 1.42857 7.64011H18.5714C18.9503 7.64011 19.3137 7.79062 19.5816 8.05853C19.8495 8.32644 20 8.6898 20 9.06868C20 9.44756 19.8495 9.81092 19.5816 10.0788C19.3137 10.3467 18.9503 10.4973 18.5714 10.4973H1.42857C1.04969 10.4973 0.686328 10.3467 0.418419 10.0788C0.15051 9.81092 0 9.44756 0 9.06868ZM0 16.2115C0 15.8327 0.15051 15.4693 0.418419 15.2014C0.686328 14.9335 1.04969 14.783 1.42857 14.783H18.5714C18.9503 14.783 19.3137 14.9335 19.5816 15.2014C19.8495 15.4693 20 15.8327 20 16.2115C20 16.5904 19.8495 16.9538 19.5816 17.2217C19.3137 17.4896 18.9503 17.6401 18.5714 17.6401H1.42857C1.04969 17.6401 0.686328 17.4896 0.418419 17.2217C0.15051 16.9538 0 16.5904 0 16.2115Z" fill="#010CA6"/>
                        </svg>

                    </div>
                </div>

            </div>
        </div>


        {/* offcanvas */}
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header d-flex justify-content-end">
            {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
            <svg data-bs-dismiss="offcanvas" aria-label="Close" width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10.3846L1 1.15385M9 10.3846L17 19.6154M9 10.3846L17 1.15385M9 10.3846L1 19.6154" stroke="#010CA6" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
            </svg>

            {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div class="offcanvas-body navLP">
            <ul>
                <li onClick={()=> homeRef.current.scrollIntoView({behavior: 'smooth'})}>Home</li>
                <li onClick={()=> aboutRef.current.scrollIntoView({behavior: 'smooth'})}>About Us</li>
                <li onClick={()=> blogRef.current.scrollIntoView({behavior: 'smooth'})}>Blog</li>
                <li onClick={()=> contactRef.current.scrollIntoView({behavior: 'smooth'})}>Contact Us</li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Nav