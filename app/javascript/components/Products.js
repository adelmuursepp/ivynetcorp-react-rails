import React from 'react';
import Navbar from './components/Navbar';
import ProductsComponent from './components/ProductsComponent';
import IvyPartner from './components/IvyPartner';
import IvyLocker from './components/IvyLocker';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Aux from './hoc/Aux_';

class Products extends React.Component {
  render() {

  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-products" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Products</h1>
                                        
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
                {/* <Footer /> */}

                {/* FooterLinks Component*/}
                {/* <FooterLinks /> */}

                {/* Switcher Component*/}
               {/* <Switcher />  */}
        </Aux>
  	);
  }
}

export default Products;