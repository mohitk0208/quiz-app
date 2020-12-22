import React, { createContext, useContext, useState } from "react";

const ScoreContext = createContext();
const ScoreUpdateContext = createContext();

export const useScore = () => useContext(ScoreContext);
export const useScoreUpdater = () => useContext(ScoreUpdateContext);

const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	return (
		<ScoreContext.Provider value={score}>
			<ScoreUpdateContext.Provider value={setScore}>
				{children}
			</ScoreUpdateContext.Provider>
		</ScoreContext.Provider>
	);
};

export default ScoreProvider;
