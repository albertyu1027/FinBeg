import React, { Component } from 'react'
import './Footer.css'

import facebook from './facebook.png'
import google from './google.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'

const Footer = () => 

<div className="footer">
	<h5>Can't get enough of us?</h5>

	<ul className="social">
		<li><a href="#"><img src={facebook} width="40" height="40" /></a></li>
		<li><a href="#"><img src={google} width="40" height="40" /></a></li>
		<li><a href="#"><img src={linkedin} width="40" height="40" /></a></li>
		<li><a href="#"><img src={twitter} width="40" height="40" /></a></li>
	</ul>
	<hr />
	<h7>Got something to tell us? Find us here: <span id="footerEmail">katie@katie.com</span></h7><br />
	<h8> &copy; 2018 Katie Inc. All Rights Reserved</h8>

</div>

export default Footer