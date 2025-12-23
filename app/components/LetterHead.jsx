import Image from 'next/image';
import bitemm from "../../public/beatai_assets/ai_flow/bitemm.png";
import signatareee from "../../public/beatai_assets/ai_flow/signatareee.png";

const LetterHead = () => {
  return (
    <>
        <section id="letter"  className="niktacacoin-area pt-100 faq-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section_title text-center">
                            <span className="wow fadeInUp"  data-wow-delay=".3s">Letter</span>
                            <h2 className="wow fadeInUp"  data-wow-delay=".4s">Letter from the Founder</h2> 
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 mb-3">
                        <div className="ceo_photo text-center">
                           
                            <Image src={bitemm} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="ceo_letter mb-3">
                            <h4 className="mb-1">Dear Member,</h4>
                            <p>This flow chart represents the macro vision at BeatAI. Our job is to focus on the micro view of each layered piece to assemble the powerful BeatBind puzzle, bringing unprecedented value.</p>
                        </div>
                        <div className="ceo_letter mb-3">
                            <h4 className="mb-1">Why is the layered business model so effective for BeatBind?</h4> 
                            <p>The effectiveness of the layered business model lies in its interdependence. When one layer achieves significant success, such as becoming a unicorn, it positively impacts all other layers, including BeatBidder, BeatBuy, BeatX, and BeatAI. Regardless of which layer becomes the major catalyst, all others benefit.</p>
                        </div>
                        <div className="ceo_letter mb-3">
                            <h4 className="mb-1">Is BeatAI going to be a game-changer?</h4> 
                            <p>Our BeatAI platform stands out due to its unique hybrid intelligence model. It prioritizes internal data sets and only seeks external sources when necessary to generate outputs for the end user.</p>
                            
                            <p>This approach ensures that our model remains internally controlled, efficiently querying our database while also having the capability to expand its knowledge base when required.</p>
                            <p>Experience the ease of command input with BeatAI, where you can seamlessly type or speak your commands, leveraging our advanced speech recognition technology to simplify your experience. And that's just the beginning of our innovative journey with BeatAI.</p>
                            <p>Nothing can stop our momentum – not now, not ever.</p>
                            <p>I warmly invite you to join us in embracing our vision as we passionately transform this industry. </p>
                            <p>Share the ❤️  Join the Journey!</p>
                            <Image width="200" src={signatareee} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default LetterHead