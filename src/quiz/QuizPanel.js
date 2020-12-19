import React from "react";
import { useIsStarted } from "../context/IsStartedContext";
import StartPage from "./components/StartPage";

import "./QuizPanel.css";

function QuizPanel() {
	const isStarted = useIsStarted();

	if (!isStarted)
		return <div className="quiz-panel">{!isStarted && <StartPage />}</div>;
	else {
		return <div>Quiz started</div>
	}
}

export default QuizPanel;
