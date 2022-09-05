import React from 'react';
import ReactDOM from 'react-dom/client';
import Football from './Football';
import Garage from './Garage';
import MyForm from './MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderTudo() {
	return (
		<>
			<Football />
			<Garage />
			<MyForm />
		</>
	);
};

root.render(renderTudo());