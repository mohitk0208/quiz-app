import { useCallback, useEffect, useState } from "react";

export const useTimer = (initialValue) => {
	const [timerValue, setTimerValue] = useState(initialValue);
	const [stopped, setStopped] = useState(false);
	const [isStart, setIsStart] = useState(false);

	useEffect(() => {
		if (isStart && timerValue > 0 && !stopped) {
			const timer = setTimeout(() => {
				setTimerValue((prev) => prev - 1);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [isStart, timerValue, stopped]);

	const start = useCallback(() => {
		setIsStart(true);
	}, []);

	const pause = useCallback(() => {
		setStopped(true);
	}, []);

	const resume = useCallback(() => {
		setStopped(false);
	}, []);

	const reset = useCallback(() => {
		setTimerValue(initialValue);
		setIsStart(false);
		setStopped(false);
	}, [initialValue]);

	return { timerValue,stopped, start, pause, resume, reset };
};
