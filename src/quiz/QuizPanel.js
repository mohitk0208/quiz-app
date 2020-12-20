import React, { useEffect, useMemo, useState } from "react";
import { useIsStarted } from "../context/IsStartedContext";
import { useQuestions } from "../context/QuestionsContext";
import QuestionNumber from "./components/QuestionNumber";
import StartPage from "./components/StartPage";
import Timer from "./components/Timer";
import Option from "./components/Option";

import "./QuizPanel.css";

const MAX_QUESTION_ANSWERING_TIME = 3;

function QuizPanel() {
	const isStarted = useIsStarted();
	const questions = useQuestions();

	const [timerValue, setTimerValue] = useState(MAX_QUESTION_ANSWERING_TIME);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const shuffledOptions = useMemo(() => {

		console.log(currentQuestion);

		return shuffle([
			...questions[currentQuestion].incorrect_answers,
			questions[currentQuestion].correct_answer,
		]);
	}, [currentQuestion,questions]);

	console.log("component refreshed");

	useEffect(() => {
		if (isStarted) {
			const timerCounter = setTimeout(() => {
				setTimerValue((prev) => prev - 1);
			}, 1000);

			if (timerValue === 0) {
				clearTimeout(timerCounter);
				if (currentQuestion < (questions.length - 1)) {
					console.log("current question", currentQuestion);
					setCurrentQuestion((prev) => prev + 1);
					setTimerValue(MAX_QUESTION_ANSWERING_TIME);
				}
			}

			return () => clearTimeout(timerCounter);
		}
		
	}, [timerValue, isStarted, currentQuestion, questions]);

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
							{shuffledOptions.map((option, index) => {
								return <Option key={index} value={option} />;
							})}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default QuizPanel;

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