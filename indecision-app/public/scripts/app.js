'use strict';

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['Item 1', 'Item 2']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    (app.options && app.options.length) > 0 && React.createElement(
        'ol',
        null,
        app.options.map(function (option, i) {
            return React.createElement(
                'li',
                { key: i },
                option
            );
        })
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
