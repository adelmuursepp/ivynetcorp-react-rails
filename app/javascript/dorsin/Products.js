import React from 'react';
import Navbar from './components/Navbar';
import ProductsComponent from './components/ProductsComponent';
import IvyPartner from './components/IvyPartner';
import IvyLocker from './components/IvyLocker';
import Services from './components/ServicesComponent';
import Features from './components/Features';
import Process from './components/SolutionsIntro';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class Products extends React.Component {
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
                                        <h1 className="home-title">Products</h1>
                                        <h1 className="home-title">Our passion for those who matter the most</h1>
                                        <h1 className="home-title">IvyNet – Connecting People</h1>
                                        <p className="padding-t-15 home-desc">Executing your wishes after death by electronically notifying those you elect and identify within your Ivylocker® account.</p>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="https://www.youtube.com/watch?v=cq0Z_-cOjww" className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

                

                {/* Productss Component*/}
                <ProductsComponent />

                {/* IvyPartner Component*/}
                <IvyPartner />

                {/* IvyLocker Component*/}
                <IvyLocker /> 

     

                {/* Testi Component*/}
                {/* <Testi /> */}

                {/* Started Component*/}
                {/* <Started /> */}

                {/* Blog Component*/}
                {/* <Blog /> */}

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

export default Products;