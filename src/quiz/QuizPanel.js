import React, { useEffect, useState } from "react";
import "./QuizPanel.css";

import { useIsStarted } from "../context/IsStartedContext";
import { useQuestions } from "../context/QuestionsContext";
import QuestionNumber from "./components/QuestionNumber";
import StartPage from "./components/StartPage";
import Timer from "./components/Timer";
import Option from "./components/Option";
import Next from "./components/Next";
import QuitButton from "./components/QuitButton";
import { useTimer } from "../hooks/timer-hook";
import { useCurrentQuestion } from "../context/CurrentQuestionContext";
import { useQuizQuestion } from "../hooks/quiz-question-hook";
import ScoreBoard from "./components/ScoreBoard";
import { useResponseStatus } from "../context/ResponseStatusContext";

const MAX_QUESTION_ANSWERING_TIME = 10;

function QuizPanel() {
	const isStarted = useIsStarted();
	const questions = useQuestions();
	const currentQuestion = useCurrentQuestion();
	const responseStatus = useResponseStatus();

	const [isQuizEnd, setIsQuizEnd] = useState(false);

	const { timerValue, stopped, start, pause, resume, resetTimer } = useTimer(
		MAX_QUESTION_ANSWERING_TIME
	);

	const {
		presentQuestion,
		shuffledOptions,
		noOfQuestions,
		nextQuestion,
	} = useQuizQuestion();
	const [timeoutOrOptionSelected, setTimeoutOrOptionSelected] = useState(false);

	const [isNextActive, setIsNextActive] = useState(false);

	console.log("component refreshed");

	useEffect(() => {
		if (isStarted) {
			start();
		}
	}, [isStarted, start]);

	useEffect(() => {
		if (timerValue === 0) {
			console.log("current question", currentQuestion);

			setTimeoutOrOptionSelected(true);
			setIsNextActive(true);
		}
	}, [currentQuestion, nextQuestion, resetTimer, start, timerValue]);

	useEffect(() => {
		if (currentQuestion === noOfQuestions - 1 && timeoutOrOptionSelected) {
			console.log("Quiz ends");
			const timer = setTimeout(() => {
				setIsQuizEnd(true);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [currentQuestion, timeoutOrOptionSelected, noOfQuestions]);

	const optionSelectHandler = () => {
		setTimeoutOrOptionSelected(true);
		pause();
		setIsNextActive(true);
	};

	const nextButtonClickHandler = () => {
		nextQuestion();
		setIsNextActive(false);
		setTimeoutOrOptionSelected(false);
		resetTimer();
		start();
	};

	if (!isStarted)
		return (
			<div className="quiz-panel">
				<StartPage />
			</div>
		);
	else if (!isQuizEnd) {
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

					<div className="score">score: {responseStatus.correct * 2}</div>

					<Timer value={timerValue} maxValue={MAX_QUESTION_ANSWERING_TIME} />

					<div className="question-container">
						<div className="question">{presentQuestion.question}</div>
						<div className="options-container">
							{shuffledOptions.map((option, index) => {
								const isCorrect = option === presentQuestion.correct_answer;

								return (
									<Option
										key={index}
										value={option}
										isCorrect={isCorrect}
										optionSelected={timeoutOrOptionSelected}
										onClick={optionSelectHandler}
										disabled={timeoutOrOptionSelected}
									/>
								);
							})}
						</div>
					</div>
					<Next
						active={isNextActive}
						onClick={nextButtonClickHandler}
						nextQuestion={nextButtonClickHandler}
					/>
				</div>
			</>
		);
	} else {
		return (
			<div className="quiz-panel">
				<ScoreBoard noOfQuestions={noOfQuestions} />
			</div>
		);
	}
}

export default QuizPanel;
