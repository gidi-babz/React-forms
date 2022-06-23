const EmailInput = (props) => {
	return (
		<div className={props.emailInputClasses}>
			<label htmlFor="email">Email address</label>
			<input
				type="email"
				id="email"
				onChange={props.emailChangeHandler}
				onBlur={props.emailInputBlurHandler}
				placeholder="example@example.com"
				value={props.enteredEmail}
			/>
		</div>
	);
};

export default EmailInput;
