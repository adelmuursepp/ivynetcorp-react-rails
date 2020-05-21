import React from 'react';
import { Link } from 'react-router-dom';

class AboutIntro extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-6">
                    <div className="features-box">
                        <h3>Who we are</h3>
                        <p className=" web-desc">IvyNet’s  vision became the foundation of an approved patent which would richly benefit people from all walks of life, and all age groups in making connections for families during one of life’s most challenging events – the passing of a loved one.</p>
                        <p className=" web-desc">IvyNet provides a suite of services.  Our services provide security and peace of mind for individuals and business alike.  Each service offered resides in a secure encrypted environment with backup copies of data maintained in an off-site location.</p>
                        
                        {/* <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">We put a lot of effort in design.</li>
                            <li className="">The most important ingredient of successful website.</li>
                            <li className="">Sed ut perspiciatis unde omnis iste natus error sit.</li>
                            <li className="">Submit Your Orgnization.</li>
                        </ul> */}
                        <a href="/about" className="btn btn-custom margin-t-30 waves-effect waves-light">More about us <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="features-img features-right text-right">
                        <img src="images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default AboutIntro;