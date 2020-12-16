import React, { createContext, useContext, useState } from "react";

const QuestionsContext = createContext();
const QuestionsUpdateContext = createContext();

export const useQuestions = () => useContext(QuestionsContext);
export const useQuestionsUpdater = () => useContext(QuestionsUpdateContext);

const QuestionsProvider = ({ children }) => {
	const [questions, setQuestions] = useState([]);

	return (
		<QuestionsContext.Provider value={questions}>
			<QuestionsUpdateContext.Provider value={setQuestions}>
				{children}
			</QuestionsUpdateContext.Provider>
		</QuestionsContext.Provider>
	);
};


export default QuestionsProvider;