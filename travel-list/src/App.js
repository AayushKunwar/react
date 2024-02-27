import { useState } from "react";

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((old) => [...old, item]);
	}

	function handleDeleteItems(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	return (
		<div>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList items={items} onDeleteItem={handleDeleteItems} />
			<Stats />
		</div>
	);
}

function Form({ onAddItems }) {
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
		onAddItems(newItem);

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

function Item({ item, onDeleteItem }) {
	return (
		<li>
			<span>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

function PackingList({ items, onDeleteItem }) {
	return (
		<ul>
			{items.map((item) => (
				<Item item={item} onDeleteItem={onDeleteItem} />
			))}
		</ul>
	);
}

function Stats() {
	return <div>stats here</div>;
}
