import React, { Component } from 'react'
import { ComposableMap, ZoomableGroup, Geographies, Geography} from 'react-simple-maps'
import data from './world-50m.json'

const wrapper = {
	width: '100%',
	maxWidth: '100%',
	margin: "0 auto"
}

class World extends Component {
	render() {
		return(
			 <div style={wrapper}>
				<ComposableMap projectionConfig={{
					scale: 205,
					rotation: [-11,0,0]
				}}
				width={"100%"}
				height={"auto"}
				style={{
					width: '100%',
					height: "auto"
				}}>

				<ZoomableGroup center={[0, 20]} disablePanning>

				<Geographies geography={data}>

				{(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
						<Geography
							key={i}
							geography={geography}
							projection={projection}
							style={{
								default: {
									fill: "#ECEFF1",
									stroke: "#607D8B",
									strokeWidth: 0.75,
									outline: "none",
								},
								hover: {
									fill: "#607D8B",
									stroke: "#607D8B",
									strokeWidth: 0.75,
									outline: "none",
								},
								pressed: {
									fill: "#FF5722",
									stroke: "#607D8B",
									strokeWidth: 0.75,
									outline: "none",
								},
							}}
						/>
					))}
				
				</Geographies>
				</ZoomableGroup>
				</ComposableMap>
			</div>
		)
	}
}

export default World;