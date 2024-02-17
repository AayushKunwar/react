import { useState } from "react";

function Dates() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	function handleStepInc() {
		setStep((s) => s + 1);
	}
	function handleStepDec() {
		setStep((s) => s - 1);
	}
	function handleCountInc() {
		setCount((c) => c + 1);
	}
	function handleCountDec() {
		setCount((c) => c - 1);
	}

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const today = new Date();
	today.setDate(today.getDate() + step * count);
	const dayOfWeek = days[today.getDay()];
	const month = months[today.getMonth()];
	const dayOfMonth = today.getDate();
	const year = today.getFullYear();

	const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;

	return (
		<div>
			<div>
				<button onClick={handleStepDec}>-</button>
				Steps: {step}
				<button onClick={handleStepInc}>+</button>
			</div>
			<div>
				<button onClick={handleCountDec}>-</button>
				Count: {count}
				<button onClick={handleCountInc}>+</button>
			</div>
			<br></br>
			{step === 1 && count === 0 ? (
				<p>The date today is {formattedDate}</p>
			) : step < 0 || count < 0 ? (
				<p>
					{count * step} days ago was {formattedDate}
				</p>
			) : (
				<p>
					{count * step} days later is {formattedDate}
				</p>
			)}
			<span>{today.toDateString()}</span>
		</div>
	);
}

export default Dates;
