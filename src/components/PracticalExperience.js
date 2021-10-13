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
					placeholder="Company Name"
				/>
				<br />
				<label htmlFor="position">Position: </label>
				<input
					onChange={this.props.handleChange}
					id="position"
					type="text"
					name="position"
					value={this.props.position}
					placeholder="Position"
				/>
				<br />
				<label htmlFor="yourJob">Your Job: </label>
				<input
					onChange={this.props.handleChange}
					id="yourJob"
					type="text"
					name="yourJob"
					value={this.props.yourJob}
					placeholder="Tell something about your job..."
				/>
				<br />
				<label htmlFor="yearWork">Year Of Work: </label>
				<input
					onChange={this.props.handleChange}
					id="yearWork"
					type="text"
					name="yearWork"
					value={this.props.yearWork}
					placeholder="(Example:-2005-2008)"
				/>
			</div>
		);
	}
}

export default PracticalExperience;
