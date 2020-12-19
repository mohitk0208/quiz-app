import React from "react";
import { useIsStarted } from "../context/IsStartedContext";
import QuestionNumber from "./components/QuestionNumber";
import StartPage from "./components/StartPage";
import Timer from "./components/Timer";
import Option from "./components/Option";

import "./QuizPanel.css";

function QuizPanel() {
	const isStarted = useIsStarted();

	if (!isStarted)
		return (
			<div className="quiz-panel">
				<StartPage />
			</div>
		);
	else {
		return (
			<>
				<div className="quiz-panel">
					<QuestionNumber current={1} total={10} />
					<Timer value={19} maxValue={30} />
					<div className="question-container">
						<div className="question">Who is the prime minister of india ?</div>
						<div className="options-container">
							<Option />
							<Option />
							<Option />
							<Option />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default QuizPanel;
