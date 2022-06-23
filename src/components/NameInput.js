const NameInput = (props) => {
	return (
		<div className={props.nameInputClasses}>
			<label htmlFor="name">Your Name</label>
			<input
				type="text"
				id="name"
				onChange={props.nameChangeHandler}
				onBlur={props.nameInputBlurHandler}
				value={props.enteredName}
			/>
		</div>
	);
};

export default NameInput;
