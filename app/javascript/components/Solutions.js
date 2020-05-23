import React from 'react';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import SolutionsBox from './components/SolutionsBox';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class Solutions extends React.Component {
  render() {

  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-solutions" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Solutions</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

               {/* Solutions Component*/}
                <SolutionsBox/>

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

export default Solutions;