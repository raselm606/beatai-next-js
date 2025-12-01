import Image from 'next/image';
import Marquee from "react-fast-marquee";
import amad from '../../public/beatai_assets/images/powered/amad.svg';
import aws from '../../public/beatai_assets/images/powered/aws.svg';
import beatbind from '../../public/beatai_assets/images/powered/beatbind.svg';
import claude from '../../public/beatai_assets/images/powered/claude.svg';
import deepseek from '../../public/beatai_assets/images/powered/deepseek.svg';
import eleven from '../../public/beatai_assets/images/powered/eleven.svg';
import gemini from '../../public/beatai_assets/images/powered/gemini.svg';
import gmap from '../../public/beatai_assets/images/powered/google-map.svg';
import grok from '../../public/beatai_assets/images/powered/grok.svg';
import lextravel from '../../public/beatai_assets/images/powered/lextravel.svg';
import meetlex from '../../public/beatai_assets/images/powered/meetlex.svg';
import nanoBanana from '../../public/beatai_assets/images/powered/nano-banana.svg';
import openai from '../../public/beatai_assets/images/powered/openai.svg';
import perplex from '../../public/beatai_assets/images/powered/perplexity.svg';
import qwen from '../../public/beatai_assets/images/powered/qwen.svg';
import stripe from '../../public/beatai_assets/images/powered/stripe.svg';
import ticketmaster from '../../public/beatai_assets/images/powered/ticketmaster.svg';
import veo from '../../public/beatai_assets/images/powered/veo3.svg';
const PoweredLogo = () => {
  return (
    <>
      <div className="powered_logo">
        <div className="container-fluid"> 
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="title_power">
                <p>Powered by</p>
              </div>
            </div>
          </div>
          <div className="row"  >
            <Marquee speed={60} gradient={false}> 
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={perplex} alt="#" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={gmap} alt="#" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={openai} alt="#" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={grok} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={amad} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={gemini} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={nanoBanana} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={eleven} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={deepseek} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={veo} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={claude} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={lextravel} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={qwen} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={beatbind} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={ticketmaster} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={meetlex} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={stripe} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={stripe} alt="strip" />
              </div>
            </div>
            <div className="col-12 col-sm mb-3">
              <div className="img_powered">
                <Image src={aws} alt="" />
              </div>
            </div> 

            </Marquee>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoweredLogo