const GeneralInfo = ({ handleChange, name, email, phoneNumber }) => {
	return (
		<div className="container">
			<h3>General Info</h3>
			<label htmlFor="name">Name: </label>
			<input
				onChange={handleChange}
				id="name"
				type="text"
				name="name"
				value={name}
				placeholder="Your Name"
			/>
			<br />
			<label htmlFor="email">Email ID: </label>
			<input
				onChange={handleChange}
				id="email"
				type="text"
				name="email"
				value={email}
				placeholder="Email Id"
			/>
			<br />
			<label htmlFor="phoneNumber">Contact Number: </label>
			<input
				onChange={handleChange}
				id="phoneNumber"
				type="text"
				name="phoneNumber"
				value={phoneNumber}
				placeholder="Contact Number"
			/>
		</div>
	);
};

export default GeneralInfo;
