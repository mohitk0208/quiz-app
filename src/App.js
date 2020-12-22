import "./App.css";
import IsStartedProvider from "./context/IsStartedContext";
import Sidebar from "./sidebar/Sidebar";
import QuizPanel from "./quiz/QuizPanel";
import QuestionsProvider from "./context/QuestionsContext";
import CurrentQuestionProvider from "./context/CurrentQuestionContext";
import ScoreProvider from "./context/ScoreContext";

function App() {
	return (
		<div className="main-container">
			<QuestionsProvider>
				<IsStartedProvider>
					<Sidebar />
					<CurrentQuestionProvider>
						<ScoreProvider>
							<QuizPanel />
						</ScoreProvider>
					</CurrentQuestionProvider>
				</IsStartedProvider>
			</QuestionsProvider>
		</div>
	);
}

export default App;
