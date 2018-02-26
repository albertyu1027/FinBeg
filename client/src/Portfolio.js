import React, { Component } from 'react'
import Navpills from './Navpills/Navpills'

import World from './Pages/World'
import Markets from './Pages/Markets'
import Dots from './Pages/Dots'
import News from './Pages/News'

class Portfolio extends Component {
	state = {
		currentPage: "World"
	};

	handlePageChange = page => {
		this.setState({
			currentPage: page
		})
	};

	renderPage = () => {
		if (this.state.currentPage === "World") {
			return <World />;
		} else if (this.state.currentPage === "Markets") {
			return <Markets />;
		} else if (this.state.currentPage === "Dots") {
			return <Dots />;
		} else if (this.state.currentPage === "News") {
			return <News />;
		} 
	}

	render() {
		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className='container'>
				  	<Navpills 
					  	currentPage={this.state.currentPage}
					  	handlePageChange={this.handlePageChange}
				  	/>
				
				  </div>
				 </nav>

			  {this.renderPage()}

			</div>
		)
	}
}

export default Portfolio