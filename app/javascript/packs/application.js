require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import 'popper.js'
import "bootstrap";
import "../dorsin/index.jsx";
import './hello_react.jsx';
import "../style/application.scss"
// import Root from '../dorsin/index.jsx'

// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';


// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(
//         <Root />, 
//         document.getElementById('root')
//     )
//   })

// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
