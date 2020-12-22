import React, { createContext, useContext, useState } from "react";

const CurrentQuestionContext = createContext();
const CurrentQuestionUpdateContext = createContext();

export const useCurrentQuestion = () => useContext(CurrentQuestionContext);
export const useCurrentQuestionUpdater = () => useContext(CurrentQuestionUpdateContext);

const CurrentQuestionProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

	return (
		<CurrentQuestionContext.Provider value={currentQuestion}>
			<CurrentQuestionUpdateContext.Provider value={setCurrentQuestion}>
				{children}
			</CurrentQuestionUpdateContext.Provider>
		</CurrentQuestionContext.Provider>
	);
};

export default CurrentQuestionProvider;
