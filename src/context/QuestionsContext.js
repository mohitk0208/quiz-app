import React, { createContext, useContext, useState } from "react";

const q = [
	{
		category: "Entertainment: Musicals & Theatres",
		type: "multiple",
		difficulty: "easy",
		question:
			"Which Shakespeare play inspired the musical West Side Story?",
		correct_answer: "Romeo Juliet",
		incorrect_answers: ["Hamlet", "Macbeth", "Othello"],
	},
	{
		category: "Geography",
		type: "multiple",
		difficulty: "medium",
		question: "Which is the largest city in Morocco?",
		correct_answer: "Casablanca",
		incorrect_answers: ["Rabat", "Fes", "Sale"],
	},
	{
		category: "General Knowledge",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
		correct_answer: "Shiatsu",
		incorrect_answers: ["Ukiyo", "Majime", "Ikigai"],
	},
	{
		category: "Science & Nature",
		type: "multiple",
		difficulty: "easy",
		question: "The human heart has how many chambers?",
		correct_answer: "4",
		incorrect_answers: ["2", "6", "3"],
	},
	{
		category: "Entertainment: Music",
		type: "multiple",
		difficulty: "easy",
		question: "In an orchestra, what is the lowest member of the brass family?",
		correct_answer: "Tuba",
		incorrect_answers: ["Trombone", "Contrabass", "Bassoon"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which stage was planned to be a part of &quot;Sonic the Hedgehog 2&quot;, but was scrapped during development?",
		correct_answer: "Genocide City Zone",
		incorrect_answers: [
			"Stardust Speedway Zone",
			"Sky High Zone ",
			"Clockwork Zone",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which weapon that was cut from the game &quot;Half Life 2&quot; was going to replace the crowbar?",
		correct_answer: "Ice Axe",
		incorrect_answers: ["Fire Axe", "Wrench", "Hunting Knife"],
	},
	{
		category: "History",
		type: "multiple",
		difficulty: "medium",
		question:
			"During which American Civil War campaign did Union troops dig a tunnel beneath Confederate troops to detonate explosives underneath them?",
		correct_answer: "Siege of Petersburg",
		incorrect_answers: [
			"Siege of Vicksburg",
			"Antietam Campaign",
			"Gettysburg Campagin",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "easy",
		question:
			"What Ultimate does Makoto Naegi, protagonist of Danganronpa: Trigger Happy Havoc, have? ",
		correct_answer: "Ultimate Lucky Student",
		incorrect_answers: [
			"Ultimate Unlucky Student",
			"Ultimate Detective",
			"Ultimate Runner",
		],
	},
];

const QuestionsContext = createContext();
const QuestionsUpdateContext = createContext();

export const useQuestions = () => useContext(QuestionsContext);
export const useQuestionsUpdater = () => useContext(QuestionsUpdateContext);

const QuestionsProvider = ({ children }) => {
	const [questions, setQuestions] = useState(q);

	return (
		<QuestionsContext.Provider value={questions}>
			<QuestionsUpdateContext.Provider value={setQuestions}>
				{children}
			</QuestionsUpdateContext.Provider>
		</QuestionsContext.Provider>
	);
};

export default QuestionsProvider;
