import React, { Component } from "react";

class CvBuilder extends Component {
	// constructor(props) {
	//     super(props);
	// }
	render() {
		return (
			<div>
				<h2>General Info</h2>
				<p>Name: {this.props.name}</p>
				<p>Email Id: {this.props.email}</p>
				<p>Contact Number: {this.props.phoneNumber}</p>
				<h2>Education</h2>
				<p>Institution: {this.props.schoolName}</p>
				<p>Faculty: {this.props.faculty}</p>
				<p>Year: {this.props.yearEdu}</p>
				<h3>Work Experience</h3>
				<p>Company: {this.props.companyName}</p>
				<p>Position: {this.props.position}</p>
				<p>Job Type: {this.props.yourJob}</p>
				<p>Year: {this.props.yearWork}</p>
			</div>
		);
	}
}

export default CvBuilder;
