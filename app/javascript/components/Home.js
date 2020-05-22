import React from 'react';
import Navbar from '../dorsin/components/Navbar';
import ProductsComponentIntro from '../dorsin/components/ProductsComponentIntro';
import ServicesComponentIntro from '../dorsin/components/ServicesComponentIntro';
import AboutIntro from '../dorsin/components/AboutIntro';
import SolutionsIntro from '../dorsin/components/SolutionsIntro';
import Contact from '../dorsin/components/Contact';
import SocialMedia from '../dorsin/components/SocialMedia';
import Footer from '../dorsin/components/Footer';
import FooterLinks from '../dorsin/components/FooterLinks';
import ContactForm from "../dorsin/components/ContactForm"
// import videoComponent from './dorsin/components/Video'
import { Link } from 'react-router-dom';
import Aux from '../dorsin/hoc/Aux_';
import About from '../dorsin/About';

class Home extends React.Component {
  render() {

  	return (
    <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">There is one thing we all have in common</h1>
                                        <h1 className="home-title">Our passion for those who matter the most</h1>
                                        {/* <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="http://vimeo.com/99025203" className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>   */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

                {/* <videoComponent /> */}
                {/* Features Component*/}
                {/* <AboutIntro /> */}

                {/* Products Component*/}
                {/* <ProductsComponentIntro /> */}

                {/* Services Component*/}
                {/* <ServicesComponentIntro /> */}

                {/* Solutions Component*/}
                {/* <SolutionsIntro /> */}
                

                {/* Descriptions Component*/}
                {/* <Descriptions /> */}

                {/* Pricing Component*/}
                {/* <Pricing /> */}

                {/* Team Component*/}
                {/* <Team /> */}


                {/* Testi Component*/}
                {/* <Testi /> */}

                {/* Started Component*/}
                {/* <Started /> */}

                {/* Blog Component*/}
                {/* <Blog /> */}

                {/* Contact Component*/}
                {/* <ContactForm />

                {/* SocialMedia Component*/}
                {/* <SocialMedia /> */}
                
                {/* Footer Component*/}
                {/* <Footer /> */} */}

                {/* FooterLinks Component*/}
                {/* <FooterLinks /> */}

                {/* Switcher Component*/}
               {/* <Switcher />  */}
        </Aux>
  	);
  }
}

export default Home;