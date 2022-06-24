import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: enteredFirstName,
		hasError: firstNameInputHasError,
		isValid: enteredFirstNameIsValid,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameInputBlurHandler,
		reset: resetFirstNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredLastName,
		hasError: lastNameInputHasError,
		isValid: enteredLastNameIsValid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameInputBlurHandler,
		reset: resetLastNameInput,
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

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (
			!enteredFirstNameIsValid &&
			!enteredLastNameIsValid &&
			!enteredEmailIsValid
		) {
			return;
		}
		console.log(enteredFirstName);
		console.log(enteredLastName);
		console.log(enteredEmail);
		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	function inputClasses(inputTypeError) {
		return inputTypeError ? 'form-control invalid' : 'form-control';
	}
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="control-group">
				<div className={inputClasses.call(null, firstNameInputHasError)}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameInputBlurHandler}
						value={enteredFirstName}
					/>
					{firstNameInputHasError && (
						<p className="error-text">First name must not be empty.</p>
					)}
				</div>
				<div className={inputClasses.call(null, lastNameInputHasError)}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameInputBlurHandler}
						value={enteredLastName}
					/>
					{lastNameInputHasError && (
						<p className="error-text">Last name must not be empty.</p>
					)}
				</div>
			</div>
			<div className={inputClasses.call(null, emailInputHasError)}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="email"
					id="name"
					placeholder="example@example.com"
					onChange={emailChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className="error-text">Please enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
