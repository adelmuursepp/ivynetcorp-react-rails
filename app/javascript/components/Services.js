import React from 'react';
import Navbar from './components/Navbar';
import ServicesComponent from './components/ServicesComponent';
import Process from './components/SolutionsIntro';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class Services extends React.Component {
  render() {

  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-services height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Services</h1>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>



                {/* Services Component*/}
                <ServicesComponent />

                
                {/* Footer Component*/}
                {/* <Footer /> */}

                {/* FooterLinks Component*/}
                {/* <FooterLinks /> */}

                {/* Switcher Component*/}
               {/* <Switcher />  */}
        
        </Aux>
  	);
  }
}

export default Services;