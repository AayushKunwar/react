import { useState } from "react";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: true },
	{ id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
	return (
		<div>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Form() {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(e);

		if (!description) return;

		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);

		setDescription("");
		setQuantity(1);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select
				value={quantity}
				onChange={(e) => {
					setQuantity(e.target.value);
				}}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<button>Add</button>
		</form>
	);
}

function Logo() {
	return <h1>🌴Far away</h1>;
}

function Item({ item }) {
	return (
		<li>
			<span>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}

function PackingList() {
	return (
		<ul>
			{initialItems.map((item) => (
				<Item item={item} />
			))}
		</ul>
	);
}

function Stats() {
	return <div>stats here</div>;
}
