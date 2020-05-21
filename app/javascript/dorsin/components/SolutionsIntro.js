import React from 'react';
import { Link } from 'react-router-dom';

class SolutionsIntro extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="solutions">
        <div className="container">
        <div className="row vertical-content">
                <div className="col-lg-12">
                    <div className="features-box">
                        <h3>Solutions</h3>
                        <p className=" web-desc">Our solution is a software deployment model in an enterprise application which is delivered and managed as a service to customers simultaneously. Our software as a service model enables every partner to benefit from the latest technological features without the disruption and costs associated with software updates and upgrades. Our solution services the needs of a partner network</p>
                        <p className=" web-desc">Benefits of IvyNet solution which may be realized by any partner</p>
                
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Accelerated software deployment with less risk</li>
                            <li className="">Lower up-front costs</li>
                            <li className="">No additional hardware and lower internal staffing requirements</li>
                            <li className="">Greater reliability, security and privacy</li>
                            <li className="">Higher productivity/ROI, at a lower cost of ownership (TCO)</li>
                            <li className="">Greater agility to scale software to meet changing business requirements</li>
                            <li className="">Quicker time to value</li>
                            <li className="">Avoid the up-front capital investments and risks, along with ongoing risks and limited returns of legacy on-premise applications</li>
                            
                        </ul>
                        <a href="/solutions" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
                {/* <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  	);
  }
}
export default SolutionsIntro;