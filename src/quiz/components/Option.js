import React, { useEffect, useState } from "react";

import "./Option.css";

function Option({ value, isCorrect, optionSelected, onClick, disabled }) {
	// const [optionValue, setOptionValue] = useState(value);

	const [styleClass, setStyleClass] = useState("");

	useEffect(() => {
		if (!optionSelected) setStyleClass("");

		if (optionSelected) {
			if (isCorrect) setStyleClass("correct");
		}
	}, [optionSelected, isCorrect]);

	const optionSelectHandler = () => {
		console.log("option clicked");
		console.log("iscorrect", isCorrect);

		if (isCorrect) setStyleClass("correct");
		else setStyleClass("incorrect");

		onClick();
	};

	return (
		<button
			className={`option ${styleClass}`}
			disabled={disabled}
			onClick={optionSelectHandler}
		>
			{value}
		</button>
	);
}

export default Option;
