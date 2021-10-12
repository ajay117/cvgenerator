import React, { Component } from "react";

class EduExperience extends Component {
	render() {
		return (
			<div>
				<h3>Education</h3>
				<label htmlFor="schoolName">Institution: </label>
				<input
					onChange={this.props.handleChange}
					id="schoolName"
					type="text"
					name="schoolName"
					value={this.props.schoolName}
				/>
				<br />
				<label htmlFor="faculty">Faculty: </label>
				<input
					onChange={this.props.handleChange}
					id="faculty"
					type="text"
					name="faculty"
					value={this.props.faculty}
				/>
				<br />
				<label htmlFor="yearEdu">Year From: </label>
				<input
					onChange={this.props.handleChange}
					id="yearEdu"
					type="text"
					name="yearEdu"
					value={this.props.yearEdu}
				/>
			</div>
		);
	}
}

export default EduExperience;