import Image from 'next/image';
import cube from '../../public/beatai_assets/images/cube.png';
const About = () => {
  return (
    <>
        <div className="about_section section_padding" id="about">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-lg-4 mb-3 scroll-top"  data-aos="fade-up" data-aos-delay="700">
                <div className="about_left_text position-sticky" style={{ top: '200px' }}>
                  <div className="section_title">
                    <span>About Beatai</span>
                    <h2>Empower Users with <br />Music AI Insights</h2>
                    <Image src={cube} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-7 offset-lg-1 mb-3" >
                <div className="about_right_text">

                  <div className="small_part_text mb-3"  data-aos="fade-up" data-aos-delay="800">
                    <h6>Platform Overview: </h6>
                    <p>BeatAI delivers a powerful platform to transform the music industry</p>
                  </div>

                  <div className="small_part_text mb-3"  data-aos="fade-up" data-aos-delay="900">
                    <h6>Key Features: </h6>
                    <ul>
                      <li>Location-based events upon sign in</li>
                      <li>Advanced chat with multi-AI engine options on a unified interface</li>
                      <li>Lex Images for stunning visuals</li>
                      <li>Intuitive Workflows for event management</li>
                      <li>Utility heuristics for smarter choices</li>
                      <li>Beats section to customize your music</li>
                    </ul>
                  </div>

                  <div className="small_part_text mb-3"  data-aos="fade-up" data-aos-delay="1000">
                    <h6>Empowerment: </h6>
                    <p>This ecosystem empowers artists, organizers, and fans to collaborate creatively and efficiently</p>
                  </div>

                  <div className="small_part_text mb-3"  data-aos="fade-up" data-aos-delay="1100">
                    <h6>Additional Tools: </h6>
                    <p>Beyond basic features, BeatAI offers Budget, Logistics, World tour planning and more to guide hiring and performance decisions</p>
                  </div>

                  <div className="small_part_text mb-3"  data-aos="fade-up" data-aos-delay="1200">
                    <h6>Machine Learning Integration:   </h6>
                    <p>Using machine learning, it provides accurate competitor and market analysis reports to minimize risks and drive industry growth by dispelling data darkness</p>
                  </div>

                  <div className="small_part_text mb-3"  data-aos="fade-up" data-aos-delay="1250">
                    <h6>Vision:  </h6>
                    <p>BeatAI is the game-changing leap toward a data-informed, vibrant music future</p>
                  </div>

                  

                   
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About