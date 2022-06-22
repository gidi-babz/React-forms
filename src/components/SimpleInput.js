import React, { useState } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameChangeHandler = (e) => setEnteredName(e.target.value);

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);

		if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			return;
		}

		setEnteredNameIsValid(true);
		console.log(enteredName);

		setEnteredName('');
	};

	let nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	if (nameInputIsInvalid && enteredName.trim().length > 0) {
		nameInputClasses = 'form-control';
	}

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					value={enteredName}
				/>
			</div>
			{nameInputIsInvalid && enteredName.trim().length === 0 && (
				<p className="error-text">Name must not be empty.</p>
			)}
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
