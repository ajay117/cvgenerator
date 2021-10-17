const CvBuilder = ({
	name,
	email,
	phoneNumber,
	schoolName,
	faculty,
	yearEdu,
	companyName,
	position,
	yourJob,
	yearWork,
	edit,
}) => {
	return (
		<div className="container-cv">
			<h3>General Info</h3>
			<p>
				<span>Name:</span> {name}
			</p>
			<p>
				<span>Email Id: </span>
				{email}
			</p>
			<p>
				<span>Contact Number: </span>
				{phoneNumber}
			</p>
			<h3>Education</h3>
			<p>
				<span>Institution: </span>
				{schoolName}
			</p>
			<p>
				<span>Faculty: </span>
				{faculty}
			</p>
			<p>
				<span>Year: </span>
				{yearEdu}
			</p>
			<h3>Work Experience</h3>
			<p>
				<span>Company: </span>
				{companyName}
			</p>
			<p>
				<span>Position: </span>
				{position}
			</p>
			<p>
				<span>Job Type: </span>
				{yourJob}
			</p>
			<p>
				<span>Job Type: </span>
				{yearWork}
			</p>
			<div className="container-button">
				<button onClick={edit}>Edit</button>
			</div>
		</div>
	);
};

export default CvBuilder;
