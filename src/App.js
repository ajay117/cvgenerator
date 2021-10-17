import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EduExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import CvBuilder from "./components/CvBuilder";
// import "./styles/styles.css";

const App = () => {
	const [cvBuilder, setCvBuilder] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [schoolName, setSchoolName] = useState("");
	const [faculty, setFaculty] = useState("");
	const [yearEdu, setYearEdu] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [position, setPosition] = useState("");
	const [yourJob, setYourJob] = useState("");
	const [yearWork, setYearWork] = useState("");

	const handleChange = (event) => {
		if (event.target.name === "name") {
			setName(event.target.value);
		} else if (event.target.name === "email") {
			setEmail(event.target.value);
		} else if (event.target.name === "phoneNumber") {
			setPhoneNumber(event.target.value);
		} else if (event.target.name === "schoolName") {
			setSchoolName(event.target.value);
		} else if (event.target.name === "faculty") {
			setFaculty(event.target.value);
		} else if (event.target.name === "yearEdu") {
			setYearEdu(event.target.value);
		} else if (event.target.name === "companyName") {
			setCompanyName(event.target.value);
		} else if (event.target.name === "position") {
			setPosition(event.target.value);
		} else if (event.target.name === "yourJob") {
			setYourJob(event.target.value);
		} else if (event.target.name === "yearWork") {
			setYearWork(event.target.value);
		}
	};

	const submit = (event) => {
		event.preventDefault();
		setCvBuilder(!cvBuilder);
	};

	const edit = (event) => {
		setCvBuilder(!cvBuilder);
	};

	if (cvBuilder) {
		return (
			<form className="container">
				<GeneralInfo
					name={name}
					email={email}
					phoneNumber={phoneNumber}
					handleChange={handleChange}
				/>
				<EduExperience
					schoolName={schoolName}
					faculty={faculty}
					yearEdu={yearEdu}
					handleChange={handleChange}
				/>
				<PracticalExperience
					companyName={companyName}
					position={position}
					yourJob={yourJob}
					yearWork={yearWork}
					handleChange={handleChange}
				/>
				<div className="container-button">
					<button onClick={submit} type="submit">
						Submit
					</button>
				</div>
			</form>
		);
	} else {
		return (
			<CvBuilder
				name={name}
				email={email}
				phoneNumber={phoneNumber}
				schoolName={schoolName}
				faculty={faculty}
				yearEdu={yearEdu}
				companyName={companyName}
				position={position}
				yourJob={yourJob}
				yearWork={yearWork}
				edit={edit}
			/>
		);
	}
};

export default App;
