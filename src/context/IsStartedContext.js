import React, { createContext, useContext, useEffect, useState } from "react";

const IsStartedContext = createContext();
const IsStartedUpdateContext = createContext();

export const useIsStarted = () => useContext(IsStartedContext);
export const useIsStartedUpdater = () => useContext(IsStartedUpdateContext);

const IsStartedProvider = ({ children }) => {
	const [isStarted, setIsStarted] = useState(false);

	useEffect(() => {
		console.log(isStarted);
	}, [isStarted]);

	return (
		<>
			<IsStartedContext.Provider value={isStarted}>
				<IsStartedUpdateContext.Provider value={setIsStarted}>
					{children}
				</IsStartedUpdateContext.Provider>
			</IsStartedContext.Provider>
		</>
	);
};

export default IsStartedProvider;
