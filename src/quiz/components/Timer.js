import React from "react";

import "./Timer.css";

const getFormattedString = (n) => {
	if (n < 10) return `0${n}`;
	else return `${n}`;
};

function Timer({ value, maxValue }) {




	return (
		<div className="timer" style={{color:"#00ff00"}}>
			<span className="minutes">
				{getFormattedString(parseInt(value / 60))}
			</span>
            <span>:</span>
            <span className="seconds">{getFormattedString(parseInt(value % 60))}</span>
		</div>
	);
}

export default Timer;
