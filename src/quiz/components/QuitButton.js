import React from "react";
import "./QuitButton.css";

const QuitButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className="quit-btn">
			Quit
		</button>
	);
};

export default QuitButton;
