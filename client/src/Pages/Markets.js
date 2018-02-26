import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2'
import './Markets.css'

import Footer from '../Footer/Footer'

const data = {
	datasets:[{
		data: [11, 22, 33, 44, 55],
		backgroundColor: ['black', 'blue', 'yellow', 'red', 'green'],
		label: "My Dataset"
	}],
	labels: ['1', '2', '3', '4', '5']
};

class Charts extends Component {

	render() {
		return (
			<div className="container charts">
				<h4>Check out the overall make up of each market</h4>

				<ul>
					<li>USA</li>
					<li>EUROPE</li>
					<li>CHINA</li>
					<li>HONG KONG</li>
				</ul>

				<div className="row">
					<div className="graph col-md-8">
						<h1>Polar Example</h1>
						<Polar data={data} />
					</div>

					<div className="info col-md-4">
						<h3>Market Name</h3>
						<h3>Market Cap</h3>
					</div>
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

export default Charts;