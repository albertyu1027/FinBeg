import React, { Component } from 'react'
import './Base.css'
import Chart from "../Chart/Chart"
// import World from '../World/World'

class Base extends Component {
	render() {
		return (
			<div className="st-container">
				<input type="radio" name="radio-set" checked="checked" id="st-control-1"/>
				<a href="#st-panel-1">World</a>
				<input type="radio" name="radio-set" checked="checked" id="st-control-2"/>
				<a href="#st-panel-2">Pie</a>
				<input type="radio" name="radio-set" checked="checked" id="st-control-3"/>
				<a href="#st-panel-3">Dots</a>
				<input type="radio" name="radio-set" checked="checked" id="st-control-4"/>
				<a href="#st-panel-4">Read</a>

				<div className="st-scroll">
					<section className="st-panel" id="st-panel-1">
					
					<h2>World</h2>
					</section>

					<section className="st-panel" id="st-panel-2">
					<Chart />
					</section>

					<section className="st-panel" id="st-panel-3">
					<h2>Knowledge</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Pellentesque nec nam aliquam sem et tortor consequat.</p>
					</section>

					<section className="st-panel" id="st-panel-4">
					<h2>Articles</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Pellentesque nec nam aliquam sem et tortor consequat.</p>
					</section>
				</div>
			</div>
		)
	}
}

export default Base;