import React, { useEffect } from "react";
import { useTimer } from "../../hooks/timer-hook";

import "./Next.css";

const Next = ({ active, onClick, nextQuestion }) => {
	const { timerValue, start, stopped, pause, resume, resetTimer } = useTimer(5);

	useEffect(() => {
		if (active) start();
		else resetTimer();

		console.log("useEffect active");
	}, [active, start, resetTimer]);

	useEffect(() => {
		console.log("useEffect nextQuestion");

		if (timerValue === 0) {
			nextQuestion();
			resetTimer();
		}
	}, [timerValue, nextQuestion, resetTimer]);

	return (
		<button disabled={!active} className="next-btn" onClick={onClick}>
			next({timerValue})
		</button>
	);
};

export default Next;
