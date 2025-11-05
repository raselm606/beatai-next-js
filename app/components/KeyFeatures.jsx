import aiImage from '@/app/beatai_assets/images/ai-image-little.png';
import beatsImage from '@/app/beatai_assets/images/beats_bg_img.png';
import ficon from '@/app/beatai_assets/images/chat_icon_1.svg';
import list_icon from '@/app/beatai_assets/images/workflow_icon_1.svg';
import Image from 'next/image';

const KeyFeatures = () => {
  return (
    <>
      <div className="key_features_section section_padding" id="key-features" >
        <div className="container">
          <div className="row justify-content-center" >
            <div className="col-lg-7 mb-3">
              <div className="section_title text-center"  data-aos="fade-up" data-aos-delay="700">
                <span>features</span>
                <h2>Key Features</h2>
                <p>BeatAI delivers revolutionary features, empowering users to harness multifunctional capabilities all on one seamless platform.</p>
              </div>
            </div>
          </div>

          <div className="row" >
            <div className="col-lg-6 col-12 mb-3">
              <div className="features_item"  data-aos="fade-up" data-aos-delay="800">
                <h4>Chat with Multiple Engines Seamlessly</h4>
                <p>A single, intuitive platform integrates all engines, eliminating the hassle of managing multiple apps or accounts.</p>

                <div className="features_list">
                  <ul>
                    <li  data-aos="fade-up" data-aos-delay="900"><Image src={ficon} alt="icon" /> Effortless Switching</li>
                    <li  data-aos="fade-up" data-aos-delay="1000"><Image src={ficon} alt="icon" /> Diverse Capabilities</li>
                    <li  data-aos="fade-up" data-aos-delay="1100"><Image src={ficon} alt="icon" /> Unified Interface</li>
                    <li  data-aos="fade-up" data-aos-delay="1200"><Image src={ficon} alt="icon" /> Enhanced Productivity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <div className="features_item"  data-aos="fade-up" data-aos-delay="800">
                <h4>AI Image Generation</h4>
                <p>Our AI Image Generation tool empowers users to create high-quality, realistic photos from text prompts using advanced algorithms. Seamlessly integrated into our platform, it enhances your creative workflow alongside other BeatAI features.</p>

                <div className="features_img"  data-aos="fade-up" data-aos-delay="900">
                  <Image src={aiImage} alt="AI Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <div className="features_item"  data-aos="fade-up" data-aos-delay="1000">
                <h4>Workflow Process Automation</h4>
                <p>Streamline all your event needs with our comprehensive suite of AI tools, ensuring enhanced security and precision for every occasion.</p>

                <div className="features_small_list">
                    <p>Our AI Suite:</p>
                  <ul>
                    <li  data-aos="fade-up" data-aos-delay="1100"><Image src={list_icon} alt="icon" /> Event Budget Planner</li>
                    <li data-aos="fade-up" data-aos-delay="1200"><Image src={list_icon} alt="icon" /> Event Logistics & Staff Planning</li>
                    <li  data-aos="fade-up" data-aos-delay="1250"><Image src={list_icon} alt="icon" /> Contract Analyzer</li>
                    <li  data-aos="fade-up" data-aos-delay="1250"><Image src={list_icon} alt="icon" /> Contract Maker</li>
                    <li  data-aos="fade-up" data-aos-delay="12750"><Image src={list_icon} alt="icon" /> World Tour Event Planner</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <div className="features_item"  data-aos="fade-up" data-aos-delay="1000">
                <h4>Beats: Elevating Music Creation</h4>
                <p>Bring your music and transform it using our suite of tools, from stem separation and AI mastering to beat generation, chord suggestions, and beyond.</p>

                <div className="features_img"  data-aos="fade-up" data-aos-delay="1000">
                  <Image src={beatsImage} alt="AI Image" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default KeyFeatures