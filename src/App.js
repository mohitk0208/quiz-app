import "./App.css";
import IsStartedProvider from "./context/IsStartedContext";
import Sidebar from "./sidebar/Sidebar";
import QuizPanel from "./quiz/QuizPanel";
import QuestionsProvider from "./context/QuestionsContext";
import CurrentQuestionProvider from "./context/CurrentQuestionContext";
import ResponseStatusProvider from "./context/ResponseStatusContext";

function App() {
	return (
		<div className="main-container">
			<QuestionsProvider>
				<IsStartedProvider>
					<Sidebar />
					<CurrentQuestionProvider>
						<ResponseStatusProvider>
							<QuizPanel />
						</ResponseStatusProvider>
					</CurrentQuestionProvider>
				</IsStartedProvider>
			</QuestionsProvider>
		</div>
	);
}

export default App;
