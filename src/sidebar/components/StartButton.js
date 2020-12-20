import React from "react";
import { useIsStarted, useIsStartedUpdater } from "../../context/IsStartedContext";

import "./StartButton.css";

function StartButton() {
    const isStarted = useIsStarted();
    const setIsStarted = useIsStartedUpdater();
    
    const startQuizHandler = () => {
        setIsStarted(prev => true)
    }

	return (
		<button className={`start-btn ${isStarted?"disabled":""}`} onClick={startQuizHandler}>
			<div className="btn-text">
				<span>START</span>
				<span>QUIZ</span>
			</div>
        </button>

	);
}

export default StartButton;
