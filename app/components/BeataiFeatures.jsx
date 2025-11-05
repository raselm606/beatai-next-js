import Image from 'next/image';
import pie_graph from '../beatai_assets/images/chart5.svg';
import cicon1 from '../beatai_assets/images/chart_icon/1.svg';
import cicon10 from '../beatai_assets/images/chart_icon/10.svg';
import cicon2 from '../beatai_assets/images/chart_icon/2.svg';
import cicon3 from '../beatai_assets/images/chart_icon/3.svg';
import cicon4 from '../beatai_assets/images/chart_icon/4.svg';
import cicon5 from '../beatai_assets/images/chart_icon/5.svg';
import cicon6 from '../beatai_assets/images/chart_icon/6.svg';
import cicon7 from '../beatai_assets/images/chart_icon/7.svg';
import cicon8 from '../beatai_assets/images/chart_icon/8.svg';
import cicon9 from '../beatai_assets/images/chart_icon/9.svg';
const BeataiFeatures = () => {
  return (
    <>
      <div className="integration_section section_padding" id="features">
              <div className="container">
                <div className="row justify-content-center">

                  <div className="col-lg-7 mb-3">
                    <div className="integration_text_right text-center">
                      <div className="section_title">
                        <span   data-aos="fade-up" data-aos-delay="1000">beatai features</span>
                        <h2   data-aos="fade-up" data-aos-delay="1100">Unlock Exceptional <br /> Results with Our BeatAI Engines</h2>
                        <p     data-aos="fade-up" data-aos-delay="1050">
                          Our suite of BeatAI engines powers through  
                          challenges to deliver top-tier results for  
                          a wide range of tasks—and so much more!</p>
                      </div>
                    </div>
                  </div>
       
                </div>

                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-5 col-12 mb-3">
                    <div className="integration_img_left">
                      <Image   data-aos="fade-up" data-aos-delay="1200" src={pie_graph} alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mb-3">
                    <div className="chart_items">
                      <ul>
                        <li  data-aos="fade-up" data-aos-delay="1300"><Image src={cicon1} alt="" />Complex Problem Solving</li>
                        <li  data-aos="fade-up" data-aos-delay="1350"><Image src={cicon2} alt="" />Debugging and Optimizing Code</li>
                        <li data-aos="fade-up" data-aos-delay="1400"><Image src={cicon3} alt="" />Business Analysis & Forecasting</li>
                        <li data-aos="fade-up" data-aos-delay="1450"><Image src={cicon4} alt="" />Code Creation from Input</li>
                        <li  data-aos="fade-up" data-aos-delay="1450"><Image src={cicon5} alt="" />Picture Analysis</li>
                        <li  data-aos="fade-up" data-aos-delay="1500"><Image src={cicon6} alt="" />Conversing with Files</li>
                        <li  data-aos="fade-up" data-aos-delay="1550"><Image src={cicon7} alt="" />Data Analysis & Forecasting</li>
                        <li  data-aos="fade-up" data-aos-delay="1550"><Image src={cicon8} alt="" />Querying Live Events & In-Chat Routes</li>
                        <li  data-aos="fade-up" data-aos-delay="1600"><Image src={cicon9} alt="" />Summarizing Lengthy Content</li>
                        <li  data-aos="fade-up" data-aos-delay="1650"><Image src={cicon10} alt="" />Simplifying Charts and Documents</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
    </>
  )
}

export default BeataiFeatures