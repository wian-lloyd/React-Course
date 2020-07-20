const details = 'Here are some spicy details.';
let showDetails = false;

const toggleDetails = () => {
	showDetails = !showDetails;
	render();
};

function render() {
	const root = document.getElementById('app');
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
			{showDetails && <p>{details}</p>}
		</div>
	);

	ReactDOM.render(template, root);
}

render();
