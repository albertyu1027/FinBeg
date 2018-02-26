import React, { Component } from 'react'

const CurrentDate = (props) => {
	return (
		<div>
			<p>{props.date}</p>
		</div>
	)
}
 
class DateStr extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var date = new Date();
		var dateStr = date.toDateString();
		
		return (
			<div>
				<h1><CurrentDate date={dateStr} /></h1>
			</div>
		)
	}
}

export default DateStr