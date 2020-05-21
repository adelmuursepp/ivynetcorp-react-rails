import React from 'react';


class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="/">
                    <img src="images/brand-full-color.png" width="100px" className="img-fluid" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/about" className="nav-link">Who we are</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/products" className="nav-link">Products</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/solutions" className="nav-link">Solutions</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/contact" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                    {/* <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Covid19 plan</button>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;