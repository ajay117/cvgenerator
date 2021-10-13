import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EduExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import CvBuilder from "./components/CvBuilder";
// import "./styles/styles.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cvBuilder: true,
			name: "",
			email: "",
			phoneNumber: "",
			schoolName: "",
			faculty: "",
			yearEdu: "",
			companyName: "",
			position: "",
			yourJob: "",
			yearWork: "",
		};
	}

	render() {
		if (this.state.cvBuilder) {
			return (
				<form className="container">
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
					<div className="container-submit">
						<button onClick={this.submit} type="submit">
							Submit
						</button>
					</div>
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
					edit={this.edit}
				/>
			);
		}
	}

	handleChange = (event) => {
		this.setState((state) => ({
			[event.target.name]: event.target.value,
		}));
	};

	submit = (event) => {
		event.preventDefault();
		this.setState((state) => ({
			cvBuilder: !state.cvBuilder,
		}));
	};
	edit = (event) => {
		this.setState((state) => ({
			cvBuilder: !state.cvBuilder,
		}));
	};
}

export default App;
