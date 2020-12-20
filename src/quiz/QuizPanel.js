import React, { useEffect, useState } from "react";
import { useIsStarted } from "../context/IsStartedContext";
import { useQuestions } from "../context/QuestionsContext";
import QuestionNumber from "./components/QuestionNumber";
import StartPage from "./components/StartPage";
import Timer from "./components/Timer";
import Option from "./components/Option";

import "./QuizPanel.css";

const MAX_QUESTION_ANSWERING_TIME = 60;

const shuffle = (array) => {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	//while there are elements to shuffle
	while (0 !== currentIndex) {
		//pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		//and swap it with current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

function QuizPanel() {
	const isStarted = useIsStarted();
	const questions = useQuestions();

	const [timerValue, setTimerValue] = useState(MAX_QUESTION_ANSWERING_TIME);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [shuffledOptions, setShuffledOptions] = useState([]);

	useEffect(() => {
		setShuffledOptions(
			shuffle([
				...questions[currentQuestion].incorrect_answers,
				questions[currentQuestion].correct_answer,
			])
		);
	}, [currentQuestion,questions]);

	useEffect(() => {
		if (isStarted) {
			const timerCounter = setTimeout(() => {
				setTimerValue((prev) => prev - 1);
			}, 1000);

			if (timerValue === 0) {
				clearTimeout(timerCounter);
			}

			return () => clearTimeout(timerCounter);
		}
	}, [timerValue, isStarted]);

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
					<QuestionNumber
						current={currentQuestion + 1}
						total={questions.length}
					/>

					<Timer value={timerValue} maxValue={MAX_QUESTION_ANSWERING_TIME} />

					<div className="question-container">
						<div className="question">
							{questions[currentQuestion].question}
						</div>
						<div className="options-container">
							{shuffledOptions.map((option) => {
								return <Option value={option} />;
							})}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default QuizPanel;
