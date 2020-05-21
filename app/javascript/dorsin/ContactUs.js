import React from 'react';
import Navbar from './components/Navbar';
import NavbarNoTransition from './components/NavbarNoTransition';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class ContactUs extends React.Component {
  render() {

  	return (
        <Aux>
                {/* Navbar Component*/}
                <NavbarNoTransition />

                {/* <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Solutions</h1>
                                        <h1 className="home-title">Our passion for those who matter the most</h1>
                                        <h1 className="home-title">IvyNet – Connecting People</h1>
                                        <p className="padding-t-15 home-desc">Executing your wishes after death by electronically notifying those you elect and identify within your Ivylocker® account.</p>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="https://www.youtube.com/watch?v=cq0Z_-cOjww" className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>  */}



                {/* Contact Component*/}
                <Contact />

                {/* SocialMedia Component*/}
                <SocialMedia />
                
                {/* Footer Component*/}
                <Footer />

                {/* FooterLinks Component*/}
                {/* <FooterLinks /> */}

                {/* Switcher Component*/}
               {/* <Switcher />  */}
        </Aux>
  	);
  }
}

export default ContactUs;