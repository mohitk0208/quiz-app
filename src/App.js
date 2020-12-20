import "./App.css";
import IsStartedProvider from "./context/IsStartedContext";
import Sidebar from "./sidebar/Sidebar";
import QuizPanel from "./quiz/QuizPanel";
import QuestionsProvider from "./context/QuestionsContext";

function App() {
	return (
		<div className="main-container">
			<QuestionsProvider>
				<IsStartedProvider>
					<Sidebar />
					<QuizPanel />
				</IsStartedProvider>
			</QuestionsProvider>
		</div>
	);
}

export default App;
