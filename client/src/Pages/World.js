import React, { Component } from 'react'
import './World.css'

import Clock from '../Clock/Clock'
import Footer from '../Footer/Footer'

// <li><span id='days'>{days}</span>Days</li>

class World extends Component {
	render() {
		return(
			<div>	
				<Clock className="clock"/>

				<h3>Get your finance knowledge together and join the race</h3>

				<div className="container world"> 
					<ul>
						<div className="row">
							<div className="col-md-3">
								<li><span id="usa">$28 TRILLION</span>USA</li>
							</div>
							<div className="col-md-3">
								<li><span id="eu">$10 TRILLION</span>EUROPE</li>
							</div>
							<div className="col-md-3">
								<li><span id="china">$8 TRILLION</span>CHINA</li>
							</div>
							<div className="col-md-3">
								<li><span id="hk">$5 TRILLION</span>HONG KONG</li>
							</div>
						</div>

						<li><span id="crypto">$426 BILLION</span>CRYPTO</li>
					</ul>
				</div>

				<div className="daily">
					<h1>Here's what you have to know today</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>

				<div className="subscribe alert alert-info" role="alert">
					<form>
						<h5>Stop falling behind! Money does not wait.</h5>

						<input type="email" placeholder="EMAIL" /> 
						<br />
						<input type="submit" />
					</form>
				</div>

				<Footer />
			</div>	
		)
	}
}

export default World;