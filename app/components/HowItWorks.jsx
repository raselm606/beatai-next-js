import Image from 'next/image';
import Link from 'next/link';
import coupon_img from '../../public/beatai_assets/images/coupon.png';
import small_cube from '../../public/beatai_assets/images/cube2.png';
import user4 from '../../public/beatai_assets/images/gif/delivery-service.gif';
import user3 from '../../public/beatai_assets/images/gif/profile.gif';
import user2 from '../../public/beatai_assets/images/gif/recommendation.gif';
import user1 from '../../public/beatai_assets/images/gif/speech-bubble.gif';
const HowItWorks = () => {
  return (
    <>
      <div className="howitworks_section section_padding" id="howitworks">
        <div className="container">
          <div className="row extra_bg justify-content-center">
            <Image className="ani_img" src={small_cube} alt="image" />
            <div className="col-lg-12">
              <div className="section_title text-center">
                <span data-aos="fade-up">4 simple steps</span>
                <h2 data-aos="fade-up">How BeatAI works</h2> 
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="card_works" data-aos="fade-up">
                <span><Image src={user1} alt=""></Image></span>
                <h6 data-aos="fade-up">Create Your Account</h6>
                <p>Unlock Your BeatAI Journey Today!</p>
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="card_works" data-aos="fade-up">
                <span><Image src={user2} alt=""></Image></span>
                <h6 data-aos="fade-up">Choose Your Package</h6>
                <p>Select the Perfect Plan for Your Music Dreams!</p>
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="card_works" data-aos="fade-up">
                <span><Image src={user3} alt=""></Image></span>
                <h6 data-aos="fade-up">Create Your Profile</h6>
                <p>Build Your Unique BeatAI Identity!</p>
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="card_works" data-aos="fade-up">
                <span><Image src={user4} alt=""></Image></span>
                <h6 data-aos="fade-up">Enjoy BeatAI</h6>
                <p>Dive In and Elevate Your Music Experience!</p>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mb-3">
              <div className="coupon_img"  data-aos="fade-up">
                <Link href="#"><Image src={coupon_img} alt="coupon" /></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks