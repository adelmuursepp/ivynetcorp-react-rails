import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-12">
                    <div className="features-box">
                        <h3>Who we are</h3>
                        <p className=" web-desc">IvyNet’s  vision became the foundation of an approved patent which would richly benefit people from all walks of life, and all age groups in making connections for families during one of life’s most challenging events – the passing of a loved one.</p>
                        <p className=" web-desc">IvyNet provides a suite of services.  Our services provide security and peace of mind for individuals and business alike.  Each service offered resides in a secure encrypted environment with backup copies of data maintained in an off-site location.</p>
                        <p className=" web-desc">Services range from Locker storage for storing data for individuals and families to safe guarding the identity of the deceased, thwarting identity theft. IvyNet facilitates income protection for families while lowering losses for business.</p>
                        <p className=" web-desc">IvyNet’s approach allows the family to grieve worry-free, improves cash flow for Funeral Directors, saves time for handling and processing the affairs of the deceased, provides clarity for the family derived from the locker contents after passing, and improves loss mitigation for Medicare and Social Security.</p>
                        <p className=" web-desc">Our nation is in need of an improved infrastructure, one which will support the country for future generations.  IvyNet’s software as a service platform provides innovative technology which reduces the bottom line in states’ unclaimed assets and brings to the commercial market value for every family and value for business in the IvyPartner Network; who will help shape this new frontier.</p>
                        
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
export default Features;