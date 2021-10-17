const PracticalExperience = ({
	handleChange,
	companyName,
	position,
	yourJob,
	yearWork,
}) => {
	return (
		<div>
			<h3>Experience</h3>
			<label htmlFor="companyName">Company: </label>
			<input
				onChange={handleChange}
				id="companyName"
				type="text"
				name="companyName"
				value={companyName}
				placeholder="Company Name"
			/>
			<br />
			<label htmlFor="position">Position: </label>
			<input
				onChange={handleChange}
				id="position"
				type="text"
				name="position"
				value={position}
				placeholder="Position"
			/>
			<br />
			<label htmlFor="yourJob">Your Job: </label>
			<input
				onChange={handleChange}
				id="yourJob"
				type="text"
				name="yourJob"
				value={yourJob}
				placeholder="Tell something about your job..."
			/>
			<br />
			<label htmlFor="yearWork">Year Of Work: </label>
			<input
				onChange={handleChange}
				id="yearWork"
				type="text"
				name="yearWork"
				value={yearWork}
				placeholder="(Example:-2005-2008)"
			/>
		</div>
	);
};

export default PracticalExperience;
