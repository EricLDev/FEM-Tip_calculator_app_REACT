import React, { useState, useEffect } from "react";
import classes from "./ResultCard.module.css";

const ResultCard = ({ bill, tip, people, resetForm }) => {
	const [totalPerPerson, setTotalPerPerson] = useState("");
	const [tipPerPerson, setTipPerPerson] = useState("");

	useEffect(() => {
		if (bill && tip && people) {
			const numberBill = Number(bill);
			const numberTip = Number(tip);
			const numberPeople = Number(people);
			const total = numberBill + numberBill * (numberTip / 100);

			setTotalPerPerson((total / numberPeople).toFixed(2));
			setTipPerPerson(((numberBill * (numberTip / 100)) / numberPeople).toFixed(2));
		} else {
			setTotalPerPerson(0);
			setTipPerPerson(0);
		}
	}, [bill, tip, people]);

	const handleReset = (e) => {
		e.preventDefault();
		setTotalPerPerson(0);
		setTipPerPerson(0);
		resetForm();
	};
	return (
		<div className={classes.resultCard}>
			<div className={classes.wrapper}>
				<div className={classes.label}>
					<p>Tip Amount</p>
					<p>/ person</p>
				</div>
				<div className={classes.amount}>${tipPerPerson}</div>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.label}>
					<p>Total</p>
					<p>/ person</p>
				</div>
				<div className={classes.amount}>${totalPerPerson}</div>
			</div>
			<button className={!totalPerPerson ? classes.inactiveButton : classes.activeButton} onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default ResultCard;
