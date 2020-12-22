import React from "react";
import { useResponseStatus } from "../../context/ResponseStatusContext";

import "./ScoreBoard.css"

const ScoreBoard = ({ noOfQuestions }) => {
	const { correct, incorrect } = useResponseStatus();

	return (
		<>
			<div className="score-board">
				<h2>Quiz Summary</h2>
				<div className="summary">
					<p>Incorrect Answers : {incorrect}</p>
					<p>Correct Answers : {correct}</p>
					<p>Not Answered : {noOfQuestions - (correct + incorrect)}</p>
				</div>
				<h2>Score</h2>
				<p className="score-board-score">{correct * 2}</p>
			</div>
		</>
	);
};

export default ScoreBoard;
