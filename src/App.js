import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EduExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import CvBuilder from "./components/CvBuilder";
// import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cvBuilder: false,
			name: "Ajay",
			email: "meajay64@gmail.com",
			phoneNumber: "123455",
			schoolName: "Anjuli",
			faculty: "Science",
			yearEdu: "2000-2003",
			companyName: "Active",
			position: "Instructor",
			yourJob: "Instructor",
			yearWork: "2009-2012",
		};
	}

	render() {
		if (this.state.cvBuilder) {
			return (
				<form>
					<GeneralInfo
						name={this.state.name}
						email={this.state.email}
						phoneNumber={this.state.phoneNumber}
						handleChange={this.handleChange}
					/>
					<EduExperience
						schoolName={this.state.schoolName}
						faculty={this.state.faculty}
						yearEdu={this.state.yearEdu}
						handleChange={this.handleChange}
					/>
					<PracticalExperience
						companyName={this.state.companyName}
						position={this.state.position}
						yourJob={this.state.yourJob}
						yearWork={this.state.yearWork}
						handleChange={this.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			);
		} else {
			return (
				<CvBuilder
					name={this.state.name}
					email={this.state.email}
					phoneNumber={this.state.phoneNumber}
					schoolName={this.state.schoolName}
					faculty={this.state.faculty}
					yearEdu={this.state.yearEdu}
					companyName={this.state.companyName}
					position={this.state.position}
					yourJob={this.state.yourJob}
					yearWork={this.state.yearWork}
				/>
			);
		}
	}

	handleChange = (event) => {
		this.setState((state) => ({
			[event.target.name]: event.target.value,
		}));
	};
}

export default App;
