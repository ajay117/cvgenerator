const EduExperience = ({ handleChange, schoolName, faculty, yearEdu }) => {
	return (
		<div>
			<h3>Education</h3>
			<label htmlFor="schoolName">Institution: </label>
			<input
				onChange={handleChange}
				id="schoolName"
				type="text"
				name="schoolName"
				value={schoolName}
				placeholder="Institution"
			/>
			<br />
			<label htmlFor="faculty">Faculty: </label>
			<input
				onChange={handleChange}
				id="faculty"
				type="text"
				name="faculty"
				value={faculty}
				placeholder="Faculty"
			/>
			<br />
			<label htmlFor="yearEdu">Year From: </label>
			<input
				onChange={handleChange}
				id="yearEdu"
				type="text"
				name="yearEdu"
				value={yearEdu}
				placeholder="(Example:-2000-2003)"
			/>
		</div>
	);
};

export default EduExperience;
