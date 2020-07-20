console.log('App.js is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

const removeAllOptions = () => {
	app.options = [];
	render();
};

const makeDecision = () => {
	const rand = Math.floor(Math.random() * app.options.length);
	alert(app.options[rand]);
};

const appRoot = document.getElementById('app');

function render() {
	const { title, subtitle, options } = app;

	const template = (
		<div>
			<h1>{title}</h1>
			{subtitle && <p>{subtitle}</p>}
			<p>{options && options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={!options.length} onClick={makeDecision}>
				What should I do?
			</button>
			<button onClick={removeAllOptions}>Remove all</button>
			<ol>
				{options.map((option, i) => (
					<li key={i}>{option}</li>
				))}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

render();
