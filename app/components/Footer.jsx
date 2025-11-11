import Image from 'next/image'
import Link from 'next/link'
import facebook from '../../public/beatai_assets/images/glance/social/facebook.svg'
import beatbind_form from '../../public/beatai_assets/images/glance/social/fbeatbind.svg'
import instagram from '../../public/beatai_assets/images/glance/social/instagram.svg'
import linkedin from '../../public/beatai_assets/images/glance/social/linkedin.svg'
import medium from '../../public/beatai_assets/images/glance/social/medium.svg'
import telegram from '../../public/beatai_assets/images/glance/social/telegram.svg'
import twitter from '../../public/beatai_assets/images/glance/social/twitter.svg'
const Footer = () => {
  return (
    <>
      <div className="footer_section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
              <div className="footer_text text-center">
                
                <p>Copyright © {new Date().getFullYear()}, BeatAI. <br />
                  All trademarks and copyrights belong to their respective owners.</p>

                <div className="legal_info mt-3 mb-3">
                  <Link href="https://beatbind.io/legal">Legal Information</Link> <span>|</span>
                  <Link href="https://beatai.io/privacy-policy">Privacy Policy</Link> <span>|</span>
                  <Link href="https://beatbind.io/pledge">Pledge Policy</Link> 
                </div>

                <div className="all_social">

                  <Link target="_blank" href="https://t.me/beatbindutilitytoken">
                    <Image src={telegram} alt="" />
                  </Link>
                  <Link target="_blank" href="https://www.facebook.com/beatbind/">
                    <Image src={facebook} alt="" />
                  </Link>
                  <Link target="_blank" href="https://t.me/BeatBind_BBND">
                    <Image src={telegram} alt="" />
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com/company/beatbind">
                    <Image src={linkedin} alt="" />
                  </Link>
                  <Link target="_blank" href="https://twitter.com/beat_bind">
                    <Image src={twitter} alt="" />
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/beatbindgram/">
                    <Image src={instagram} alt="" />
                  </Link>
                  <Link target="_blank" href="https://medium.com/@beatbind">
                    <Image src={medium} alt="" />
                  </Link>

                </div>

                <div className="beatlogo text-center mt-4">
                  <span>with 💜 from</span> 
                  <Link href="https://beatbind.io"><Image src={beatbind_form} alt="logo" /></Link>
                </div>

                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer