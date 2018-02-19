import React, { Component } from 'react'
import './World.css'

class World extends Component {
	render() {
		return (
			<div class="world st-container">
				<input type="radio" name="radio-set" checked="checked" id="st-control-1"/>
				<a href="#st-panel-1">World</a>
				<input type="radio" name="radio-set" checked="checked" id="st-control-2"/>
				<a href="#st-panel-2">Pie</a>
				<input type="radio" name="radio-set" checked="checked" id="st-control-3"/>
				<a href="#st-panel-3">Dots</a>

				<div class="st-scroll">
					<section class="st-panel" id="st-panel-1">
					<h2>World Map</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Pellentesque nec nam aliquam sem et tortor consequat.</p>
					</section>

					<section class="st-panel" id="st-panel-2">
					<h2>Serving you yummy PIE</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Pellentesque nec nam aliquam sem et tortor consequat.</p>
					</section>

					<section class="st-panel" id="st-panel-3">
					<h2>Drain the knowledge</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Pellentesque nec nam aliquam sem et tortor consequat.</p>
					</section>
				</div>
			</div>
		)
	}
}

export default World;