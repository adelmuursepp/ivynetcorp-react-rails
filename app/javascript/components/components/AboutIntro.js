import React from 'react';

class AboutIntro extends React.Component {
  render() {
  	return (
        <div>
        {/* <section className="section bg-light col-lg-12" id="spacing-box"> </section> */}
        <div className="row">
                    <div className="col-lg-8 offset-lg-2 align-items-center h-100 " id="who-we-are-title">
                        <h1 className="section-title text-center mx-auto">Who we are</h1>
                        {/* <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p> */}
                    </div>
                </div>
        <div className="row">

            <section className="section col-lg-6" id="features">
            <div className="container ml-4 pl-4">
                <div className="row vertical-content">
                    <div className="">
                        <div className="features-box">
                            {/* <h3>Who we are</h3> */}
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
                </div>
            </div>
            </section>
            <div className="col-lg-6">
                        
                            <img src="images/FamilyHappy.jpg" alt="macbook image" className="img-fluid" />
                        
            </div>
        </div>   
       
        </div> 
  	);
  }
}
export default AboutIntro;