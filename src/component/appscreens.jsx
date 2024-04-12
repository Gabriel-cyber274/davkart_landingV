import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App_screens() {
    const [idx, setIdx] = useState(0);
    const [four, setFour] = useState(false);
    const [three, setThree] = useState(false);
    const [two, setTwo] = useState(false);

    const SamplePrevArrow = ({onClick}) => {
        return (
        <div className="arrow prev position-absolute" onClick={onClick} style={{color: idx===0?'grey': 'navy'}}>
            {/* <img src={left} /> */}
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8887 22.1139L9.55539 16.7805M9.55539 16.7805L14.8887 11.4472M9.55539 16.7805H23.7776M0.666504 16.7805C0.666504 14.6794 1.08036 12.5988 1.88443 10.6576C2.68851 8.71637 3.86706 6.95255 5.3528 5.46681C6.83853 3.98107 8.60236 2.80252 10.5436 1.99845C12.4848 1.19437 14.5654 0.780518 16.6665 0.780518C18.7677 0.780518 20.8482 1.19437 22.7894 1.99845C24.7306 2.80252 26.4945 3.98107 27.9802 5.46681C29.4659 6.95255 30.6445 8.71637 31.4486 10.6576C32.2527 12.5988 32.6665 14.6794 32.6665 16.7805C32.6665 21.024 30.9808 25.0936 27.9802 28.0942C24.9796 31.0948 20.91 32.7805 16.6665 32.7805C12.423 32.7805 8.35338 31.0948 5.3528 28.0942C2.35221 25.0936 0.666504 21.024 0.666504 16.7805Z" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        )
    }

    const SampleNextArrow = ({onClick}) => {
        return (
        <div className="arrow next position-absolute" onClick={onClick} style={{color: idx===2?'grey': 'navy'}}>
            {/* <img src={right} /> */}
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7778 11.4472L24.1111 16.7805M24.1111 16.7805L18.7778 22.1139M24.1111 16.7805H9.88889M33 16.7805C33 18.8817 32.5861 20.9622 31.7821 22.9035C30.978 24.8447 29.7994 26.6085 28.3137 28.0942C26.828 29.58 25.0641 30.7585 23.1229 31.5626C21.1817 32.3667 19.1012 32.7805 17 32.7805C14.8989 32.7805 12.8183 32.3667 10.8771 31.5626C8.93586 30.7585 7.17203 29.58 5.68629 28.0942C4.20055 26.6085 3.022 24.8447 2.21793 22.9035C1.41385 20.9622 1 18.8817 1 16.7805C1 12.5371 2.68571 8.46739 5.68629 5.46681C8.68687 2.46623 12.7565 0.780518 17 0.780518C21.2435 0.780518 25.3131 2.46623 28.3137 5.46681C31.3143 8.46739 33 12.5371 33 16.7805Z" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        
        )
    }


    useEffect(() => {
    //   first 
    let query = window.matchMedia('screen and (max-width: 1146px)');
    let query2 = window.matchMedia('screen and (max-width: 915px)');
    let query3= window.matchMedia('screen and (max-width: 678px)');



        function resize() {
            if(query.matches){
                setFour(true);
                setTwo(false);
                setThree(false);
            }
            if(query2.matches) {
                setThree(true)
                setFour(false);
                setTwo(false);
            }
            
            if(query3.matches) {
                setTwo(true)
                setThree(false)
                setFour(false);
            }
            
            else if(!query.matches && !query2.matches && !query3.matches ) {
                setFour(false);
                setThree(false)
                setTwo(false);
            }
        }
        resize(); // Initial check
        window.addEventListener('resize', resize);
    
        return () => {
          window.removeEventListener('resize', resize);
        };
    }, [])
    

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear", 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // beforeChange: (current, next)=> setIdx(next),
        
    };
    
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear", 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // beforeChange: (current, next)=> setIdx(next),
        
    };

    
    const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear", 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // beforeChange: (current, next)=> setIdx(next),
    };

    
    const settings4 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear", 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // beforeChange: (current, next)=> setIdx(next),
    };
  return (
    <div className="screens position-relative">
        {(!four && !three && !two) ? <Slider {...settings}>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-1.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-2.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-3.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-4.png" alt="" />
            </div>
        </Slider> : (four && !three && !two) ? <Slider {...settings2}>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-1.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-2.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-3.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-4.png" alt="" />
            </div>
        </Slider>: (!four && three && !two) ? 
            <Slider {...settings3}>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-1.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-2.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-3.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-4.png" alt="" />
            </div>
        </Slider> : <Slider {...settings4}>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-1.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-2.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-3.png" alt="" />
            </div>
            <div className="screen">
                <img src="/assets/iPhone 15 Pro Portrait Mockup-4.png" alt="" />
            </div>
        </Slider> 
         }
    </div>
  )
}

export default App_screens