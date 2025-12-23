import Image from 'next/image';
import fchart from "../../public/beatai_assets/ai_flow/fchart.svg";

const FlowChart = () => {
  return (
    <>
    <section id="flowchart" className="flowchart-area pb-100 pt-200" >
         
        
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 mt-4">
                            <div className="section_title text-center">
                                {/* <span class="wow fadeInUp"  data-wow-delay=".4s">BeatAI</span> */}
                                <h2 className="wow fadeInUp"  data-wow-delay=".4s">BeatAI Simple Flow Chart</h2> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="flowchart_img ">
                                <Image src={fchart} alt="flowchart" />
                            </div>
                        </div>
                    </div>
                    
                </div>
           
        
    </section>
        
    </>
  )
}

export default FlowChart