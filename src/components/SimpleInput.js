import React, { useState } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredNameIsValid) {
			return;
		}
		console.log(enteredName);
		setEnteredName('');
		setEnteredNameTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
			</div>
			{nameInputIsInvalid && (
				<p className="error-text">Name must not be empty.</p>
			)}
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
