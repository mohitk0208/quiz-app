import { useCallback, useMemo } from "react";
import {
	useCurrentQuestion,
	useCurrentQuestionUpdater,
} from "../context/CurrentQuestionContext";
import { useQuestions } from "../context/QuestionsContext";
import { shuffle } from "../functions";

export const useQuizQuestion = () => {
	const questions = useQuestions();
	const currentQuestion = useCurrentQuestion();
    const setCurrentQuestion = useCurrentQuestionUpdater();
    

	const noOfQuestions = useMemo(() => questions.length, [questions]);

	const shuffledOptions = useMemo(() => {
		console.log(currentQuestion);

		return shuffle([
			...questions[currentQuestion].incorrect_answers,
			questions[currentQuestion].correct_answer,
		]);
	}, [currentQuestion, questions]);




	const presentQuestion = useMemo(() => {
		return questions[currentQuestion];
	}, [currentQuestion, questions]);



    const nextQuestion = useCallback(() => {
		if (currentQuestion < noOfQuestions - 1) {
			console.log("current question", currentQuestion);

			setCurrentQuestion((prev) => prev + 1);
		}
    }, [noOfQuestions, currentQuestion, setCurrentQuestion]);
    

    const resetCurrentQuestion = useCallback(() => setCurrentQuestion(0),[setCurrentQuestion]);

	return { presentQuestion, shuffledOptions,noOfQuestions, nextQuestion, resetCurrentQuestion };
};
