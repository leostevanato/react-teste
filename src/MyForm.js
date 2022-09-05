import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
	const [campos, setCampos] = useState({});
	// const [inputs, setInputs] = useState({});
	// const [textarea, setTextarea] = useState(
	// 	"The content of a textarea goes in the value attribute"
	// );

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setCampos(values => ({ ...values, [name]: value }));
		// setInputs(values => ({ ...values, [name]: value }));
		// setTextarea(event.target.value)
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(campos);
		// console.log(textarea);
	};

	return (
		<form onSubmit={ handleSubmit }>
			<label>Enter your name:
				<input
					type="text"
					name="username"
					value={ campos.username || "" }
					onChange={ handleChange }
				/>
			</label>

			<br /><br />

			<label>Enter your e-mail:
				<input
					type="text"
					name="email"
					value={ campos.email || "" }
					onChange={ handleChange }
				/>
			</label>

			<br /><br />

			<label>Enter your age:
				<input
					type="number"
					name="age"
					value={ campos.age || "" }
					onChange={ handleChange }
				/>
			</label>

			<br /><br />

			<label>Select your car:
				<select name="car" value={ campos.car } onChange={ handleChange }>
					<option value="Ford">Ford</option>
					<option value="Volvo">Volvo</option>
					<option value="Fiat">Fiat</option>
				</select>
			</label>

			<br /><br />

			<label>Mensagem:
				<textarea name="mensagem" value={ campos.mensagem } onChange={ handleChange } />
			</label>

			<br /><br />

			<input type="submit" />
		</form>
	)
}

export default MyForm;