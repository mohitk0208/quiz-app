import React, { useEffect, useState } from "react";
import { useResponseStatusUpdater } from "../../context/ResponseStatusContext";

import "./Option.css";

function Option({ value, isCorrect, optionSelected, onClick, disabled }) {
	// const [optionValue, setOptionValue] = useState(value);

	const [styleClass, setStyleClass] = useState("");
	const setResponseStatus = useResponseStatusUpdater();

	useEffect(() => {
		if (!optionSelected) setStyleClass("");

		if (optionSelected) {
			if (isCorrect) setStyleClass("correct");
		}
	}, [optionSelected, isCorrect]);

	const optionSelectHandler = () => {
		console.log("option clicked");
		console.log("iscorrect", isCorrect);

		if (isCorrect) {
			setStyleClass("correct");
			setResponseStatus((prev) => {
				return { ...prev, correct: prev.correct + 1 };
			});
		} else {
			setStyleClass("incorrect");
			setResponseStatus((prev) => {
				return { ...prev, incorrect: prev.incorrect + 1 };
			});
		}

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
