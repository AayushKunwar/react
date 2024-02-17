import React, { useState } from "react";
import Title from "../Components/Title";

function Esignature() {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const handleNameChange = (e) => {
		// console.log(e.target.value);
		setName(e.target.value);
	};
	function handleDateChange(e) {
		setDate(e.target.value);
	}
	return (
		<div className="container text-center">
			<Title text={name} />
			<Title text={date} />
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
				ad saepe natus facere illum numquam nobis. Ex nam velit animi
				itaque, error asperiores atque quis, impedit soluta quisquam ad
				commodi.
			</p>
			<input type="date" value={date} onChange={handleDateChange} />
			<br></br>
			<input type="text" value={name} onChange={handleNameChange} />
		</div>
	);
}

export default Esignature;
