import React, { useEffect, useMemo, useState } from "react";
import "./QuizPanel.css";

import { useIsStarted } from "../context/IsStartedContext";
import { useQuestions } from "../context/QuestionsContext";
import { shuffle } from "../functions";
import QuestionNumber from "./components/QuestionNumber";
import StartPage from "./components/StartPage";
import Timer from "./components/Timer";
import Option from "./components/Option";
import Next from "./components/Next";
import QuitButton from "./components/QuitButton";
import { useTimer } from "../hooks/timer-hook";
import { useCurrentQuestion, useCurrentQuestionUpdater } from "../context/CurrentQuestionContext";

const MAX_QUESTION_ANSWERING_TIME = 10;

function QuizPanel() {
	const isStarted = useIsStarted();
	const questions = useQuestions();
	const currentQuestion = useCurrentQuestion();
	const setCurrentQuestion = useCurrentQuestionUpdater();


	const { timerValue,stopped, start, pause,resume, reset } = useTimer(
		MAX_QUESTION_ANSWERING_TIME
	);




	const shuffledOptions = useMemo(() => {
		console.log(currentQuestion);

		return shuffle([
			...questions[currentQuestion].incorrect_answers,
			questions[currentQuestion].correct_answer,
		]);
	}, [currentQuestion, questions]);

	console.log("component refreshed");






	useEffect(() => {
		if (isStarted) {
			start();
		}
	}, [isStarted, start]);








	useEffect(() => {
		if (timerValue === 0) {
			if (currentQuestion < questions.length - 1) {
				console.log("current question", currentQuestion);
				setCurrentQuestion((prev) => prev + 1);
				reset();
				start();
			}
		}
	}, [timerValue, currentQuestion, questions, reset, start,setCurrentQuestion]);






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

					<QuitButton
						onClick={() => {
							if (stopped) resume();
							else pause();
						}}
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
					<Next />
				</div>
			</>
		);
	}
}

export default QuizPanel;
