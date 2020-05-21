import React from 'react';

class ServicesComponent extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row vertical-content">
                    <div className="col-lg-12">
                        <div className="features-box">
                            <h3>Services</h3>
                            <p className=" web-desc">Our service is a software deployment model in an enterprise application which is delivered and managed as a service to customers simultaneously. Our software as a service model enables every partner to benefit from the latest technological features without the disruption associated with software updates and upgrades</p>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Consultation</li>
                                <li className="">Program admin</li>
                                <li className="">Customer/tech support</li>
                            </ul>
                            {/* <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link> */}
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
export default ServicesComponent;