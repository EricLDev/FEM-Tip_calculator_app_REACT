import React from "react";
import classes from "./Calculator.module.css";
import Form from "./Form";

const Calculator = () => {
	return (
		<div className={classes.calculator}>
			<Form />
		</div>
	);
};

export default Calculator;
