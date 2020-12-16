import React from "react";
import { useIsStarted } from "../context/IsStartedContext";
import StartPage from "./components/StartPage";

import "./QuizPanel.css";

function QuizPanel() {
	const isStarted = useIsStarted();

	return <div className="quiz-panel">{!isStarted && <StartPage />}</div>;
}

export default QuizPanel;
