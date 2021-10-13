import React, { Component } from "react";

class CvBuilder extends Component {
	// constructor(props) {
	//     super(props);
	// }
	render() {
		return (
			<div className="container">
				<h2>General Info</h2>
				<p>
					<span>Name:</span> {this.props.name}
				</p>
				<p>
					<span>Email Id: </span>
					{this.props.email}
				</p>
				<p>
					<span>Contact Number: </span>
					{this.props.phoneNumber}
				</p>
				<h2>Education</h2>
				<p>
					<span>Institution: </span>
					{this.props.schoolName}
				</p>
				<p>
					<span>Faculty: </span>
					{this.props.faculty}
				</p>
				<p>
					<span>Year: </span>
					{this.props.yearEdu}
				</p>
				<h3>Work Experience</h3>
				<p>
					<span>Company: </span>
					{this.props.companyName}
				</p>
				<p>
					<span>Position: </span>
					{this.props.position}
				</p>
				<p>
					<span>Job Type: </span>
					{this.props.yourJob}
				</p>
				<p>Year: {this.props.yearWork}</p>
				<button onClick={this.props.edit}>Edit</button>
			</div>
		);
	}
}

export default CvBuilder;
