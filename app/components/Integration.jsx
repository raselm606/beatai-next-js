import Image from 'next/image';
import allImage from '../../public/beatai_assets/images/integration.svg';
const Integration = () => {
  return (
    <>
      <div className="integration_section section_padding" id="beatai-integration">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-lg-6 mb-3">
              <div className="integration_img_left"  data-aos="fade-up"data-aos-delay="700">
                <Image src={allImage} alt="image" />
              </div>
            </div>

            <div className="col-lg-5 mb-3">
              <div className="integration_text_right">
                <div className="section_title"  data-aos="fade-up" data-aos-delay="1000">
                  <span  data-aos="fade-up" data-aos-delay="1100">integrations</span>
                  <h2  data-aos="fade-up" data-aos-delay="1200">Use Our Powerful <br />Integrations in BeatAI</h2>
                  <p  data-aos="fade-up" data-aos-delay="1300">Our seamless integration effortlessly lets you switch between AI engines with a single click, enhancing your experience and boosting task efficiency.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Integration