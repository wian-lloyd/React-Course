'use strict';

var details = 'Here are some spicy details.';
var showDetails = false;

var toggleDetails = function toggleDetails() {
	showDetails = !showDetails;
	render();
};

function render() {
	var root = document.getElementById('app');
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleDetails },
			showDetails ? 'Hide Details' : 'Show Details'
		),
		showDetails && React.createElement(
			'p',
			null,
			details
		)
	);

	ReactDOM.render(template, root);
}

render();
