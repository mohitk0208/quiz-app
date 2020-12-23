import React from "react";
import { useResponseStatus } from "../../context/ResponseStatusContext";

import "./ScoreBoard.css";

const ScoreBoard = ({ noOfQuestions }) => {
	const { correct, incorrect } = useResponseStatus();

	return (
		<>
			<div className="score-board">
				<h1>Quiz Summary</h1>
				<div className="summary">
					<p className="incorrect-answers">{`Incorrect Answers :`} {incorrect}</p>
					<p className="correct-answers">{`Correct Answers   :`} {correct}</p>
					<p className="not-answered-answers">{`Not Answered      :`} {noOfQuestions - (correct + incorrect)}</p>
				</div>
				<h2>Score</h2>
				<p className="score-board-score">{correct * 2}</p>
			</div>
		</>
	);
};

export default ScoreBoard;
