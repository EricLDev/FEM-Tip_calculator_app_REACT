import React, { useState, useRef, useEffect } from "react";
import classes from "./Form.module.css";
import ResultCard from "./ResultCard";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Form = () => {
	const initialValues = {
		bill: "",
		tip: "",
		people: "",
	};

	const [values, setValues] = useState(initialValues);
	const inputCustomTip = useRef();

	const handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValues({ ...values, [name]: value });
	};

	/* 	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	}; */

	const resetForm = () => {
		setValues(initialValues);
	};

	useEffect(() => {
		console.log(values);
	}, [values]);

	return (
		<div className={classes.form}>
			<form>
				<div className={classes.inputGroup}>
					<label htmlFor="bill">Bill</label>
					<input onChange={handleOnChange} type="text" name="bill" value={values.bill} />
					<img src={dollar} alt="" />
				</div>
				<div className={classes.inputGroup}>
					<p>Select Tip %</p>
					<div className={classes.gridTip}>
						<div className={values.tip === "5" ? classes.checked : ""}>
							<label htmlFor="5">
								<input onChange={handleOnChange} type="radio" id="5" name="tip" value="5" />
								5%
							</label>
						</div>
						<div className={values.tip === "10" ? classes.checked : ""}>
							<label htmlFor="10">
								<input onChange={handleOnChange} type="radio" id="10" name="tip" value="10" />
								10%
							</label>
						</div>
						<div className={values.tip === "15" ? classes.checked : ""}>
							<label htmlFor="15">
								<input onChange={handleOnChange} type="radio" id="15" name="tip" value="15" />
								15%
							</label>
						</div>
						<div className={values.tip === "25" ? classes.checked : ""}>
							<label htmlFor="25">
								<input onChange={handleOnChange} type="radio" id="25" name="tip" value="25" />
								25%
							</label>
						</div>
						<div className={values.tip === "50" ? classes.checked : ""}>
							<label htmlFor="50">
								<input onChange={handleOnChange} type="radio" id="50" name="tip" value="50" />
								50%
							</label>
						</div>
						<div>
							<input ref={inputCustomTip} onChange={handleOnChange} className={classes.customInput} type="text" id="customInput" name="tip" placeholder="Custom" />
						</div>
					</div>
				</div>
				<div className={classes.inputGroup}>
					<div className={classes.labelPeople}>
						<label htmlFor="people">Number of People</label>
						{values.people === "0" && <p className={classes.errorPeople}>Can't be zero</p>}
					</div>
					<input className={values.people === "0" ? classes.error : ""} onChange={handleOnChange} type="text" name="people" value={values.people} />
					<img src={person} alt="" />
				</div>
			</form>
			<ResultCard bill={values.bill} tip={values.tip} people={values.people} resetForm={resetForm} />
		</div>
	);
};

export default Form;
