import React, { Component } from 'react'
import DateStr from '../Date/Date'

class Clock extends Component {

	constructor (props) {
		let m = new Date().getMinutes();
		if(m < 10) {
			m = '0' + m
		}

		let s = new Date().getSeconds();
		if (s < 10) {
			s = "0" + m
		}

		super(props);

		this.state = {
			seconds: s, 
			minutes: m,
			hours: new Date().getHours()
		};
	}

	runtime() {
	    let m = new Date().getMinutes();
	    if(m < 10){
	      m = '0'+ m
	    };

	    let s = new Date().getSeconds();
	    if(s < 10){
	      s = '0'+ s
	    };
	    this.setState({
	      seconds: s,
	      minute: m,
	      hours: new Date().getHours(),
	    });
	 }

	componentDidMount() {
	 	setInterval(this.runtime.bind(this), 1000)
	 }

	render(){
		return(
			<div className="clock">
				<DateStr />
				<h1> {this.state.hours} : {this.state.minute} : {this.state.seconds} </h1>
			</div>
		)
	}
}

export default Clock