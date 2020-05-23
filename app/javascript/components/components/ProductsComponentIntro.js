import React from 'react';

class ProductsComponentIntro extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Products</h1>
                        <div className="section-title-border margin-t-20"></div>
                        {/* <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p> */}
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">IvyLocker®</h4></a>
                            <p className="padding-t-15 text-muted">Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">
                            <i className="pe-7s-expand1 text-custom"></i>
                            <h4 className="padding-t-15">IvyPartner</h4>
                            </a>
                            <p className="padding-t-15 text-muted">info</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">   
                            <i className="pe-7s-shield text-custom"></i>
                            <h4 className="padding-t-15">IvyProtect</h4>
                            </a>
                            <p className="padding-t-15 text-muted">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">
                            <i className="pe-7s-phone text-custom"></i>
                            <h4 className="padding-t-15">IvyWish</h4>
                            </a>
                            <p className="padding-t-15 text-muted">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default ProductsComponentIntro;