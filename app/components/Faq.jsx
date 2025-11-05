import Link from 'next/link';
const Faq = () => {
  return (
    <>
      <div className="faq_section section_padding" id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section_title text-center">
                <span data-aos="fade-up">FAQS</span>
                <h2 data-aos="fade-up">Frequently Asked questions</h2>
                <p data-aos="fade-up">If you have any other questions, please email us at support(@)beatai.io. Our 24/7 team members will respond promptly.</p>
              </div>
            </div>
          </div>


          <div className="row justify-content-center">

            <div className="col-lg-5 col-md-12 mb-3">
                <div className="accordion" id="accordionExample">

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Who is BeatAI?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Predictive, Al-powered analytics that provide detailed insights into event performance and audience engagement, optimizing marketing strategies and revenue potential, including AI chat and image creation. Join us.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is BeatAI releasing soon?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>We anticipate a soft launch by the end of Q4.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I generate images?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Our Lex Images tab creates images based on your input.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        How does BeatAI chat work?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Our seamless integration effortlessly lets you switch between AI engines with a single click, enhancing your experience and boosting task efficiency.</p>
                      </div>
                    </div>
                  </div>

                </div>
            </div>

            
            
            <div className="col-lg-5 col-md-12">
                <div className="accordion" id="accordionExample2">

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Can I generate lyrics using BeatAI?
                      </button>
                    </h2>
                    <div id="collapse6" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Yes, you can generate lyrics.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        Does BeatAI offer Beats & Chords?
                      </button>
                    </h2>
                    <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Yes, that feature is available in our Pro and Platinum plans.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        What is the price of BeatAI?
                      </button>
                    </h2>
                    <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>BeatAI has a tier to fit all your needs from a free tier to Pro Plan and our Platinum plan. Join us.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Where can I get more information about the parent company?
                      </button>
                    </h2>
                    <div id="collapse9" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                       <p> BeatAI is a wholly owned subsidiary of BeatBind For more information, please visit <Link href="https://beatbind.io">www.beatbind.io</Link></p>
                      </div>
                    </div>
                  </div>

                </div>
            </div>

           
        </div>


        </div>
      </div>
    </>
  )
}

export default Faq