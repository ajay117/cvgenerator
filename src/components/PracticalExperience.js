import React, { Component } from "react";

class PracticalExperience extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div>
				<h3>Experience</h3>
				<label htmlFor="companyName">Company: </label>
				<input
					onChange={this.props.handleChange}
					id="companyName"
					type="text"
					name="companyName"
					value={this.props.companyName}
				/>
				<br />
				<label htmlFor="position">Position: </label>
				<input
					onChange={this.props.handleChange}
					id="position"
					type="text"
					name="position"
					value={this.props.position}
				/>
				<br />
				<label htmlFor="yourJob">Job Type: </label>
				<input
					onChange={this.props.handleChange}
					id="yourJob"
					type="text"
					name="yourJob"
					value={this.props.yourJob}
				/>
				<br />
				<label htmlFor="yearWork">Year Of Work: </label>
				<input
					onChange={this.props.handleChange}
					id="yearWork"
					type="text"
					name="yearWork"
					value={this.props.yearWork}
				/>
			</div>
		);
	}
}

export default PracticalExperience;
