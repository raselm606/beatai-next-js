'use client'; 
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import slide1 from '../../public/beatai_assets/images/banner1.jpg';
import slide2 from '../../public/beatai_assets/images/banner2.jpg';
import slide3_3 from '../../public/beatai_assets/images/banner3.3.jpg';
import slide3 from '../../public/beatai_assets/images/banner3.jpg';
import slide4 from '../../public/beatai_assets/images/banner4.jpg';
import slide5 from '../../public/beatai_assets/images/banner5.jpg';
import slide6 from '../../public/beatai_assets/images/banner6.jpg';
import support_icon from '../../public/beatai_assets/images/support-arrow.svg';
import PoweredLogo from './PoweredLogo';
const Hero = () => {
  var settings = {
    dots: true,
    navs:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           
    autoplaySpeed: 3000,      
    pauseOnHover: true,      
    cssEase: "linear" ,
    responsive: [
      {
        breakpoint: 768,  
        settings: {
          arrows: false,  
        }
      }
    ]
  };
  return (
    <>
      <div className="hero_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 mb-3">
              <div className="hero_text">
                <span className="toptext" data-aos="fade-up"  data-aos-delay="700" >Introducing lex</span>
                <h1 data-aos="fade-up"  data-aos-delay="800" >Advanced Multi-AI Engines <br /> One Unified Platform</h1>
                <p data-aos="fade-up"  data-aos-delay="900" >Unleash the Power of AI, Streamlined and Effortless</p>
              </div>
              <div className="hero_btn mt-3 mb-4" data-aos="fade-up"  data-aos-delay="1000">
                <Link disabled href="https://beatai.io/login" className="hero_big_btn mb-2">Get Started for FREE</Link>
                <Link href="#key-features" className="hero_big_btn mb-2">Explore Features</Link>
                <Image className="support_arrow" src={support_icon} alt="icon" />
              </div>
            </div>

            <div className="col-lg-12" data-aos="fade-up"  data-aos-delay="1500">
              <div className="hero_slider text-center">
                <Slider {...settings}>
                <div className="slick_s">
                  <Image src={slide1} alt="slide1" />
                </div>
                <div className="slick_s">
                  <Image src={slide2} alt="slide2" />
                </div>
                <div className="slick_s">
                  <Image src={slide3_3} alt="slide3.2" />
                </div>
                <div className="slick_s">
                  <Image src={slide3} alt="slide3" />
                </div>
                <div className="slick_s">
                  <Image src={slide4} alt="slide4" />
                </div>
                <div className="slick_s">
                  <Image src={slide5} alt="slide5" />
                </div>
                <div className="slick_s">
                  <Image src={slide6} alt="slide6" />
                </div>
                </Slider>
              </div>
            </div>
            
          </div>
        </div>

        
      <PoweredLogo/>
      </div>
    </>
  )
}

export default Hero