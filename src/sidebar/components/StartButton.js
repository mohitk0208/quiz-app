import React from "react";
import {
	useIsStarted,
	useIsStartedUpdater,
} from "../../context/IsStartedContext";
import { useQuestionsUpdater } from "../../context/QuestionsContext";

import "./StartButton.css";

function StartButton() {
	const isStarted = useIsStarted();
	const setIsStarted = useIsStartedUpdater();
	const setQuestions = useQuestionsUpdater();

	const startQuizHandler = async () => {
		const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");

		const responseData = await response.json();

		setQuestions(responseData.results);
		console.log(responseData);
		setIsStarted(true);
	};

	return (
		<button
			className={`start-btn ${isStarted ? "disabled" : ""}`}
			onClick={startQuizHandler}
		>
			<div className="btn-text">
				<span>START</span>
				<span>QUIZ</span>
			</div>
		</button>
	);
}

export default StartButton;
