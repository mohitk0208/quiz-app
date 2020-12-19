import React from "react";

import "./Timer.css";

const padWithZeroes = (number, length) => {
	var my_string = "" + number;
	while (my_string.length < length) {
		my_string = "0" + my_string;
	}

	return my_string;
};

const getcurrentColorString = (currentValue, maxValue) => {
	const percentValue = (currentValue / maxValue) * 100;

	if (percentValue > 90 && percentValue <= 100) return "#00ff00";
	if (percentValue > 80 && percentValue <= 90) return "#46f800";
	if (percentValue > 70 && percentValue <= 80) return "#8df800";
	if (percentValue > 60 && percentValue <= 70) return "#d3f800";
	if (percentValue > 50 && percentValue <= 60) return "#f8f400";
	if (percentValue > 40 && percentValue <= 50) return "#f8cb00";
	if (percentValue > 30 && percentValue <= 40) return "#f8a100";
	if (percentValue > 20 && percentValue <= 30) return "#f87800";
	if (percentValue > 10 && percentValue <= 20) return "#f84f00";
	if (percentValue > 5 && percentValue <= 10) return "#f83200";

	return "#ff0000";
};

function Timer({ value, maxValue }) {
	return (
		<div
			className="timer"
			style={{ color: getcurrentColorString(value, maxValue) }}
		>
			<span className="minutes">{padWithZeroes(parseInt(value / 60), 2)}</span>
			<span>:</span>
			<span className="seconds">{padWithZeroes(parseInt(value % 60), 2)}</span>
		</div>
	);
}

export default Timer;
