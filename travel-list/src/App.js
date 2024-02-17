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

function Logo() {
	return <h1>🌴Far away</h1>;
}
function Form() {
	return (
		<div>
			<span>What do you need for your trip</span>
		</div>
	);
}
function PackingList() {
	return <div>Packinglist</div>;
}
function Stats() {
	return <div>stats here</div>;
}
