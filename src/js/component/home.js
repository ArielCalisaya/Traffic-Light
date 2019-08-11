import React from "react";

//include images into your bundle
import TrafficLight from "./TrafficLight";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<TrafficLight />
			</div>
		);
	}
}
