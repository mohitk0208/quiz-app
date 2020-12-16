import "./App.css";
import IsStartedProvider from "./context/IsStartedContext";
import Sidebar from "./sidebar/Sidebar";
import QuizPanel from "./quiz/QuizPanel";

function App() {
	return (
		<div className="main-container">
			<IsStartedProvider>
				<Sidebar />
				<QuizPanel />
			</IsStartedProvider>
		</div>
	);
}

export default App;
