// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['Item 1', 'Item 2']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && (<p>{app.subtitle}</p>)}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        {(app.options && app.options.length) > 0 && (
            <ol>
                {app.options.map((option, i) => (<li key={i}>{option}</li>))}
            </ol>
        )}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);