import glance_one from '@/app/beatai_assets/images/glance/at-a-glance-icon-1.svg';
import glance_two from '@/app/beatai_assets/images/glance/at-a-glance-icon-2.svg';
import glance_big_img from '@/app/beatai_assets/images/glance/at-a-glance2.png';
import slide4 from '@/app/beatai_assets/images/glance/slide10.png';
import slide6 from '@/app/beatai_assets/images/glance/slide11.png';
import slide12 from '@/app/beatai_assets/images/glance/slide12.png';
import slide13 from '@/app/beatai_assets/images/glance/slide13.png';
import slide14 from '@/app/beatai_assets/images/glance/slide14.png';
import slide15 from '@/app/beatai_assets/images/glance/slide15.png';
import slide16 from '@/app/beatai_assets/images/glance/slide16.png';
import slide5 from '@/app/beatai_assets/images/glance/slide5.svg';
import slide1 from '@/app/beatai_assets/images/glance/slide7.png';
import slide2 from '@/app/beatai_assets/images/glance/slide8.png';
import slide3 from '@/app/beatai_assets/images/glance/slide9.png';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
const AtaGlance = () => {
  return (
    <>
      <div className="ataglance_section section_padding" id="at-a-glance">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mb-3">
              <div className="glance_left_img">
                <Image  data-aos="fade-up" src={glance_big_img} alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="section_title">
                <span data-aos="fade-up">At a glance</span>
                <h2 data-aos="fade-up">Instant Visual Magic at a Glance!</h2>
                <p data-aos="fade-up">AI isn’t here to replace human creativity—It’s here to enhance it and help you reach new heights.</p>
                <p data-aos="fade-up">Whether you’re crafting fanart of your favorite anime or exploring new artistic frontiers, AI can be your creative partner, empowering you to bring your imagination to life like never before.</p>
              </div>
              <div className="icon_items_glance">
                <ul>
                  <li data-aos="fade-up">
                    <Image src={glance_one} alt="" /> 
                  Where Human Creativity Meets AI Possibility
                  </li>
                  <li data-aos="fade-up">
                    <Image src={glance_two} alt="" /> 
                  Unleash Your Imagination—Create More with BeatAI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-9">
          <div className="row">
            <Marquee speed={60} gradient={false}> 
            <div className="col mb-3">
              <div className="slide_item_img">
                <Image src={slide1} alt="image" />
              </div>
            </div>
            <div className="col mb-3 mt-7">
              <div className="slide_item_img">
                <Image src={slide6} alt="image" />
              </div>
            </div>
            <div className="col mb-3 ">
              <div className="slide_item_img">
                <Image src={slide2} alt="image" />
              </div>
            </div>
            <div className="col mb-3 mt-7">
              <div className="slide_item_img">
                <Image src={slide3} alt="image" />
              </div>
            </div>
            <div className="col mb-3 ">
              <div className="slide_item_img">
                <Image src={slide4} alt="image" />
              </div>
            </div>
            <div className="col mb-3 mt-7">
              <div className="slide_item_img">
                <Image src={slide5} alt="image" />
              </div>
            </div>
            <div className="col mb-3 ">
              <div className="slide_item_img">
                <Image src={slide12} alt="image" />
              </div>
            </div>
            <div className="col mb-3 mt-7">
              <div className="slide_item_img">
                <Image src={slide13} alt="image" />
              </div>
            </div>
            <div className="col mb-3 ">
              <div className="slide_item_img">
                <Image src={slide14} alt="image" />
              </div>
            </div>
            <div className="col mb-3 mt-7">
              <div className="slide_item_img">
                <Image src={slide15} alt="image" />
              </div>
            </div>
            <div className="col mb-3  ">
              <div className="slide_item_img">
                <Image src={slide16} alt="image" />
              </div>
            </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  )
}

export default AtaGlance