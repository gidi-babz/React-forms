import React, { useState } from 'react';
import EmailInput from './EmailInput';
import NameInput from './NameInput';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const enteredEmailIsValid = enteredEmail.trim().includes('@');
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const emailChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true);
	};

	const emailInputBlurHandler = (e) => {
		setEnteredEmailTouched(true);
	};
	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);
		setEnteredName('');
		setEnteredEmail('');
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	};

	function inputClasses(inputType) {
		return inputType ? 'form-control invalid' : 'form-control';
	}

	return (
		<form onSubmit={formSubmissionHandler}>
			<NameInput
				nameInputClasses={inputClasses(nameInputIsInvalid)}
				nameChangeHandler={nameChangeHandler}
				nameInputBlurHandler={nameInputBlurHandler}
				enteredName={enteredName}
			/>
			{nameInputIsInvalid && (
				<p className="error-text">Name must not be empty.</p>
			)}
			<EmailInput
				emailInputClasses={inputClasses(emailInputIsInvalid)}
				emailChangeHandler={emailChangeHandler}
				enteredEmail={enteredEmail}
				emailInputBlurHandler={emailInputBlurHandler}
			/>
			{emailInputIsInvalid && (
				<p className="error-text">Enter a valid email.</p>
			)}
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
