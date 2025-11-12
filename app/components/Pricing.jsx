'use client';
import Image from 'next/image';
import Link from "next/link";
import { useEffect } from "react";
import ribbon from '../../public/beatai_assets/images/ribbon5.svg';
const Pricing = () => {

  useEffect(() => {
    // Bootstrap instance 
    const bootstrap = window.bootstrap;
    if (bootstrap) {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    } else {
      console.error("Bootstrap JS not found - tooltip won't work");
    }
  }, []);
   
  return (
    <>
      <div className="price_section section_padding" id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section_title">
                <span  data-aos="fade-up">Pricing</span>
                <h2 data-aos="fade-up">BeatAI Pricing</h2>
                <p data-aos="fade-up">Select Your Plan and Stay Ahead in the AI Revolution</p>
              </div>
            </div>
          </div>

          <div className="pricing-section text-center " >

            <div className="container">
              <div className="row g-4 justify-content-center">

                <div className="col-lg-3 ">
                  <ul className="nav beat_nav_price nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Annual</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Monthly</button>
                    </li>
                     
                  </ul>
                </div>
                 
                  <div className="col-md-12"  data-aos="fade-up">

                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        
                        <div className="row">
                        
                          <div className="col-lg-4 mb-3">
                            <div className="card  pricing-card beatai_pricing_card p-4">
                              <h5 className="plan-name">
                                Free Trial 
                                </h5>
                              <h2 className="price"  data-aos="fade-up">
                                Price: $0.00  
                              </h2>
                              <p>Total Credits: 190 (One time)</p>
                              <hr />
                              <ul className="list-unstyled text-start"  data-aos="fade-up"> 
                                <li  data-aos="fade-up" > Try all our features for a limited period </li> 
                                <li>AI Models: &nbsp; 
                                  <Image src="https://www.google.com/s2/favicons?domain=https://chatgpt.com/" 
                                  alt="OpenAI GPT-4.1" width={16} height={16}
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="OpenAI GPT-4.1" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)",
                                    }} /> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://gemini.google.com/" alt="Gemini 2.5 Flash"
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Gemini 2.5 Flash" 
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://www.deepseek.com/" alt="DeepSeek R1" 
                                  data-bs-toggle="tooltip"  width={16} height={16} 
                                  data-bs-placement="top"
                                  title="DeepSeek R1"
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  </li>
                                <li data-aos="fade-up">Perfect for exploring what we offer</li>
                                <li data-aos="fade-up">Get started with 190 credits</li>
                                <li data-aos="fade-up">Experience the full potential</li>
                                <li data-aos="fade-up">No Commitment required</li>
                                 <small></small>
                              
                              </ul>
                             
                              <Link 
                              href="https://beatai.io/signup/?plan=trial_pro_monthly" 
                              data-action="upgrade_pro_yearly" 
                              data-track="button_click" 
                              className="btn btn-primary w-100 mt-3 sticky-bottom"
                              >
                                 Try It Free for 7 Days!
                              </Link>

                              <small className="dssds">or until your credits run out—whichever comes first!</small>
                              
                            </div>
                          </div>
                          
                          <div className="col-lg-4 mb-3">
                            <div className="card   pricing-card beatai_pricing_card p-4">

                              <p className="text-center text_blue get_free">Get 1 Month Free!</p>
                              
                                <Image className="ribbon" src={ribbon} alt="offer" />
                              
                              <h5 className="plan-name text_blue">
                                Pro Plan 
                                
                                </h5>
                              <h2 className="price"  data-aos="fade-up">
                                <small className="fs-6 text_pink mx-2"><s> $167.88 </s></small> $153.89
                                <span className="fs-6">/Year</span> 
                              </h2>
                              <p>(Total Credits: 18000)</p>
                              <hr />
                              <ul className="list-unstyled text-start"  data-aos="fade-up"> 
                                <li  data-aos="fade-up" > Produce up to 1,200 images </li> 

                                
                                <li data-aos="fade-up">AI Workflows</li>
                                <li>AI Models: &nbsp; 
                                  <Image src="https://www.google.com/s2/favicons?domain=https://chatgpt.com/" alt="OpenAI GPT-4.1" 
                                  width={16} height={16}
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="OpenAI GPT-4.1" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)",
                                    }} /> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://gemini.google.com/" alt="Gemini 2.5 Flash"
                                  data-bs-toggle="tooltip"  width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Gemini 2.5 Flash" 
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://www.deepseek.com/" width={16} height={16} alt="DeepSeek R1" 
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="DeepSeek R1"
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  </li>
                                <li data-aos="fade-up">Discover Events, News & Stock Reports</li> 
                                <li data-aos="fade-up">Internet Use: Yes</li> 
                                <li data-aos="fade-up">Research Charts: Yes</li>
                                <li data-aos="fade-up">Max File Upload: 10MB</li>
                                <li data-aos="fade-up">Image & PDF Chat: Yes</li>
                                <li data-aos="fade-up">Professional Music Tools (Beats)</li>
                              </ul>
                              <button className="btn btn-primary w-100 mt-3 sticky-bottom">Subscribe</button>
                              <Link 
                              href="https://beatai.io/signup/?plan=pro_plan_yearly" 
                              data-action="upgrade_pro_yearly" 
                              data-track="button_click" 
                              className="btn btn-primary w-100 mt-3 sticky-bottom"
                              >
                                 Subscribe
                              </Link>
                            </div>
                          </div>
                          
                          <div className="col-lg-4 mb-3">
                            <div className="card ppick pricing-card beatai_pricing_card p-4">
                              <p className="text-center text_blue get_free"> Get 1 Month Free!</p>
                              <h5 className="plan-name text_platinum"> 
                                Platinum Plan
                                
                                </h5>
                              <h2 className="price"  data-aos="fade-up">
                               <small className="fs-6 text_pink mx-2"><s> $479.88  </s> </small> $439.89
                                <span className="fs-6">/Year</span> 
                              </h2>
                              <p>(Total Credits: 48000)</p>
                              <hr />
                              <ul className="list-unstyled text-start"  data-aos="fade-up"> 
                                <li  data-aos="fade-up" > Produce up to 6,000 Images </li>

                                
                                <li data-aos="fade-up">AI Workflows</li>
                               <li>AI Models: &nbsp; 
                                  <Image src="https://www.google.com/s2/favicons?domain=https://chatgpt.com/" alt="OpenAI GPT-4.1" width={16}  height={16}
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="OpenAI GPT-4.1" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)",
                                    }} /> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://gemini.google.com/" alt="Gemini 2.5 Flash"
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Gemini 2.5 Flash" 
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://www.deepseek.com/" alt="DeepSeek R1" 
                                  data-bs-toggle="tooltip"  width={16} height={16} 
                                  data-bs-placement="top"
                                  title="DeepSeek R1"
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://claude.ai/" alt="Claude 4.5 Sonnet" 
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Claude 4.5 Sonnet"
                                  style={{
                                      cursor: "pointer", 
                                    }}/>&nbsp;&nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://grok.com/" alt="xAI Grok" 
                                  data-bs-toggle="tooltip"  width={16} height={16} 
                                  data-bs-placement="top"
                                  title="xAI Grok"
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)", 
                                    }}/>&nbsp;&nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://qwenlm.github.io/" 
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Qwen VL Max"
                                  alt="Qwen VL Max" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)", 
                                    }}/>
                                  </li>
                                <li data-aos="fade-up">Discover Events, News & Stock Reports</li>
                                <li data-aos="fade-up">Internet Use: Yes</li>
                                <li data-aos="fade-up">Research Charts: Yes</li>
                                <li data-aos="fade-up">Max File Upload: 30MB</li>
                                <li data-aos="fade-up">Image & PDF Chat: Yes</li>
                                <li data-aos="fade-up">Professional Music Tools (Beats)</li>
                              </ul>
                              <Link 
                              href="https://beatai.io/signup/?plan=platinum_plan_yearly" 
                              data-action="upgrade_platinum_yearly" 
                              data-track="button_click" 
                              className="btn btn-primary w-100 mt-3 sticky-bottom"
                              >
                                 Subscribe
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                        <div className="row">
                          
                          <div className="col-lg-4 mb-3">
                            <div className="card  pricing-card beatai_pricing_card p-4">
                              <h5 className="plan-name">
                                Free Trial 
                                
                                </h5>
                              <h2 className="price"  data-aos="fade-up">
                                Price: $0.00  
                              </h2>
                              <p>Total Credits: 190 (One time)</p>
                              <hr />
                              <ul className="list-unstyled text-start"  data-aos="fade-up"> 
                                <li  data-aos="fade-up" > Try all our features for a limited period </li> 
                                <li>AI Models: &nbsp; 
                                  <Image src="https://www.google.com/s2/favicons?domain=https://chatgpt.com/" alt="OpenAI GPT-4.1" width={16} height={16}
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="OpenAI GPT-4.1" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)",
                                    }} /> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://gemini.google.com/" alt="Gemini 2.5 Flash"
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Gemini 2.5 Flash" 
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://www.deepseek.com/" alt="DeepSeek R1" 
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="DeepSeek R1"
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  </li>
                                <li data-aos="fade-up">Perfect for exploring what we offer</li>
                                <li data-aos="fade-up">Get started with 190 credits</li>
                                <li data-aos="fade-up">Experience the full potential</li>
                                <li data-aos="fade-up">No Commitment required</li>
                              </ul>
                               

                              <Link 
                              href="https://beatai.io/signup/?plan=pro_trial_monthly" 
                              data-action="upgrade_pro_monthly" 
                              data-track="button_click" 
                              className="btn btn-primary w-100 mt-3 sticky-bottom"
                              >
                                 Start 7 - Day Pro Trial
                              </Link>

                              <small className="dssds">or until your credits run out—whichever comes first!</small>
                            </div>
                          </div>
                          
                          <div className="col-lg-4 mb-3">
                            <div className="card  pricing-card beatai_pricing_card p-4">
                              
                              <Image className="ribbon" src={ribbon} alt="offer" />
                              <h5 className="plan-name text_blue ">
                                Pro Plan 
                                
                                </h5>
                              <h2 className="price"  data-aos="fade-up">
                                 $13.99
                                <span className="fs-6">/Month</span> 
                              </h2>
                              <p>(Total Credits: 1500)</p>
                              <hr />
                              <ul className="list-unstyled text-start"  data-aos="fade-up"> 
                                <li  data-aos="fade-up" > Produce up to 100 images </li> 

                                <li data-aos="fade-up">AI Workflows</li>
                                <li>AI Models: &nbsp; 
                                  <Image src="https://www.google.com/s2/favicons?domain=https://chatgpt.com/" alt="OpenAI GPT-4.1" width={16}  height={16}
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="OpenAI GPT-4.1" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)",
                                    }} /> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://gemini.google.com/" alt="Gemini 2.5 Flash"
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Gemini 2.5 Flash" 
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://www.deepseek.com/" alt="DeepSeek R1" 
                                  data-bs-toggle="tooltip"  width={16} height={16} 
                                  data-bs-placement="top"
                                  title="DeepSeek R1"
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  </li>
                                <li data-aos="fade-up">Discover Events, News & Stock Reports</li> 
                                <li data-aos="fade-up">Internet Use: Yes</li> 
                                <li data-aos="fade-up">Research Charts: Yes</li>
                                <li data-aos="fade-up">Max File Upload: 10MB</li>
                                <li data-aos="fade-up">Image & PDF Chat: Yes</li>
                                <li data-aos="fade-up">Professional Music Tools (Beats)</li>
                              </ul>
                               

                              <Link 
                              href="https://beatai.io/signup/?plan=pro_plan_monthly" 
                              data-action="upgrade_pro_monthly" 
                              data-track="button_click" 
                              className="btn btn-primary w-100 mt-3 sticky-bottom"
                              >
                                 Subscribe
                              </Link>
                            </div>
                          </div>
                          
                          <div className="col-lg-4 mb-3">
                            <div className="card  pricing-card beatai_pricing_card p-4">
                              
                               
                              <h5 className="plan-name text_platinum">
                                Platinum Plan
                                
                                </h5>
                              <h2 className="price"  data-aos="fade-up"> 
                                 $39.99
                                <span className="fs-6">/Month</span> 
                              </h2>
                              <p>(Total Credits: 4000)</p>
                              <hr />
                              <ul className="list-unstyled text-start"  data-aos="fade-up"> 
                                <li  data-aos="fade-up" > Produce up to 500 Images </li> 

                                <li data-aos="fade-up">AI Workflows</li>
                                <li>AI Models: &nbsp; 
                                  <Image src="https://www.google.com/s2/favicons?domain=https://chatgpt.com/" alt="OpenAI GPT-4.1" width={16}  height={16}
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top"
                                  title="OpenAI GPT-4.1" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)",
                                    }} /> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://gemini.google.com/" alt="Gemini 2.5 Flash"
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Gemini 2.5 Flash" 
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://www.deepseek.com/" alt="DeepSeek R1" 
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="DeepSeek R1"
                                  style={{
                                      cursor: "pointer", 
                                    }}/> &nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://claude.ai/" alt="Claude 4.5 Sonnet" 
                                  data-bs-toggle="tooltip" width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Claude 4.5 Sonnet"
                                  style={{
                                      cursor: "pointer", 
                                    }}/>&nbsp;&nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://grok.com/" alt="xAI Grok" 
                                  data-bs-toggle="tooltip" 
                                  data-bs-placement="top" width={16} height={16}
                                  title="xAI Grok"
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)", 
                                    }}/>&nbsp;&nbsp;
                                  <Image src="https://www.google.com/s2/favicons?domain=https://qwenlm.github.io/" 
                                  data-bs-toggle="tooltip"  width={16} height={16} 
                                  data-bs-placement="top"
                                  title="Qwen VL Max"
                                  alt="Qwen VL Max" 
                                  style={{
                                      cursor: "pointer",
                                      filter: "invert(1)", 
                                    }}/>
                                  </li>
                                <li data-aos="fade-up">Discover Events, News & Stock Reports</li>
                                <li data-aos="fade-up">Internet Use: Yes</li>
                                <li data-aos="fade-up">Research Charts: Yes</li>
                                <li data-aos="fade-up">Max File Upload: 30MB</li>
                                <li data-aos="fade-up">Image & PDF Chat: Yes</li>
                                <li data-aos="fade-up">Professional Music Tools (Beats)</li>
                              </ul>
                              <Link 
                              href="https://beatai.io/signup/?plan=platinum_plan_monthly" 
                              data-action="upgrade_platinum_monthly" 
                              data-track="button_click" 
                              className="btn btn-primary w-100 mt-3 sticky-bottom"
                              >
                                 Subscribe
                              </Link>
                            </div>
                          </div>

                        </div>

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

export default Pricing