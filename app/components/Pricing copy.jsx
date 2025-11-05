import { useState } from 'react';
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  // pricing data
  const plans = [
    {
      name: "Free Trial",
      monthly_credit: "(190 credits - one time)",
      monthly: "$0.00",
      yearly: "$0.00",
      yearly_credit: "(190 credits - one time)",
      features: [
        "Try all our features for a limited period",
        "Perfect for exploring what we offer ",
        "Get started with 190 credits",
        "Experience the full potential",
        "No Commitment required" 
      ]
    },
    {
      name: "Pro Plan",
      monthly_credit: "(1,500 credits)",
      monthly: "$13.99",
      yearly: "$153.89",
      yearly_credit: "(18000 credits)",
      features: [
        "Produce up to 100 images",
        "Unlimited events search",
        "AI Workflows",
        "Maps Nav: Yes",
        "News Search: Yes",
        "Internet Use: Yes",
        "Files Upload: Yes",
        "Research Charts: Yes",
        "Max File Upload: 10MB",
        "Image & PDF Chat: Yes",
        "Professional Music Tools (Beats)"
      ]
    },
    {
      name: "Platinum Plan",
      monthly: "$39.99",
      monthly_credit: "(4000 credits)",
      yearly: "$439.89",
      yearly_credit: "(48000 credits)",
      features: [
        "Produce up to 500 Images",
        "Unlimited events search",
        "AI Workflows",
        "Maps Nav: Yes",
        "News Search: Yes",
        "Internet Use: Yes",
        "Files Upload: Yes",
        "Research Charts: Yes",
        "Max File Upload: 30MB",
        "Image & PDF Chat: Yes",
        "Professional Music Tools (Beats)"
      ]
    }
  ];
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
            <div className="toggle-switch top_togle mb-5"  data-aos="fade-up">
              <span className={!isYearly ? "active" : ""}>Monthly</span>
              <div className="form-check form-switch d-inline-block mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
              </div>
              <span className={isYearly ? "active" : ""}>Yearly</span>
            </div>

            <div className="container">
              <div className="row g-4 justify-content-center">
                {plans.map((plan, index) => (
                  <div key={index} className="col-md-4"  data-aos="fade-up">
                    <div className="card coupone pricing-card beatai_pricing_card p-4">
                      <h5 className="plan-name">
                        {plan.name} 
                        <span>{isYearly ? plan.yearly_credit : plan.monthly_credit}</span>
                         </h5>
                      <h2 className="price"  data-aos="fade-up">
                        {isYearly ? plan.yearly : plan.monthly}
                        {plan.name !== "Free Trial" && (
        <span className="fs-6">/{isYearly ? "year" : "month"}</span>
    )}
                      </h2>
                      <hr />
                      <ul className="list-unstyled text-start"  data-aos="fade-up">
                        {plan.features.map((f, i) => {
                          let featureText = f;

                          // 🔄 conditional feature change for yearly plans
                          if (isYearly) {
                            if (plan.name === "Pro Plan" && f.includes("Produce up to 100 images")) {
                              featureText = "Produce up to 1,200 images";
                            }
                            if (plan.name === "Platinum Plan" && f.includes("Produce up to 500 Images")) {
                              featureText = "Produce up to 6,000 Images";
                            }
                          }

                          return <li  data-aos="fade-up" key={i}> {featureText}</li>;
                        })}
                      </ul>
                      <button className="btn btn-primary w-100 mt-3 sticky-bottom">Subscribe</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Pricing