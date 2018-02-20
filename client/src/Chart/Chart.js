import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2'
import './Chart.css'

const data = {
	datasets:[{
		data: [11, 22, 33, 44, 55],
		backgroundColor: ['black', 'blue', 'yellow', 'red', 'green'],
		label: "My Dataset"
	}],
	labels: ['1', '2', '3', '4', '5']
};

class Chart extends Component {

	render() {
		return (
			<div className="container charts">
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
			</div>
		)
	}
}

export default Chart;