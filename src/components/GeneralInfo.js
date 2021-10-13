import React, { Component } from "react";

class GeneralInfo extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<div className="container">
				<h3>General Info</h3>
				<label htmlFor="name">Name: </label>
				<input
					onChange={this.props.handleChange}
					id="name"
					type="text"
					name="name"
					value={this.props.name}
					placeholder="Your Name"
				/>
				<br />
				<label htmlFor="email">Email ID: </label>
				<input
					onChange={this.props.handleChange}
					id="email"
					type="text"
					name="email"
					value={this.props.email}
					placeholder="Email Id"
				/>
				<br />
				<label htmlFor="phoneNumber">Contact Number: </label>
				<input
					onChange={this.props.handleChange}
					id="phoneNumber"
					type="text"
					name="phoneNumber"
					value={this.props.phoneNumber}
					placeholder="Contact Number"
				/>
			</div>
		);
	}
}

export default GeneralInfo;
