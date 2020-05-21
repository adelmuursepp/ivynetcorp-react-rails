import React from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline social margin-t-20">
                            <li className="list-inline-item"> <a href="http://facebook.com/ivylocker" className="social-icon"><i className="mdi mdi-facebook"></i></a></li>
                            <li className="list-inline-item"> <a href="http://www.twitter.com/ivychief" className="social-icon"><i className="mdi mdi-twitter"></i></a></li>
                            <li className="list-inline-item"> <a href="http://www.instagram.com/ivylocker" className="social-icon"><i className="mdi mdi-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 margin-t-30 text-right"></div>
                    <div className="col-lg-3 margin-t-30 text-right">
                        <p className="contact-title"><i className="pe-7s-mail-open"></i>&nbsp; inquiry@ivylocker.com</p>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default SocialMedia;