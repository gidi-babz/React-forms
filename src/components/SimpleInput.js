import React, { useState } from 'react';
import useInput from '../hooks/use-input';
import EmailInput from './EmailInput';
import NameInput from './NameInput';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		isValid: enteredNameIsValid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		isValid: enteredEmailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.trim().includes('@'));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);
		resetNameInput();
		resetEmailInput();
	};

	function inputClasses(inputTypeError) {
		return inputTypeError ? 'form-control invalid' : 'form-control';
	}

	return (
		<form onSubmit={formSubmissionHandler}>
			<NameInput
				nameInputClasses={inputClasses.call(null, nameInputHasError)}
				nameChangeHandler={nameChangeHandler}
				nameInputBlurHandler={nameInputBlurHandler}
				enteredName={enteredName}
			/>
			{nameInputHasError && (
				<p className="error-text">Name must not be empty.</p>
			)}
			<EmailInput
				emailInputClasses={inputClasses.call(null, emailInputHasError)}
				emailChangeHandler={emailChangeHandler}
				enteredEmail={enteredEmail}
				emailInputBlurHandler={emailInputBlurHandler}
			/>
			{emailInputHasError && <p className="error-text">Enter a valid email.</p>}
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
