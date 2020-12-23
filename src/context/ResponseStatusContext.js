import React, { createContext, useContext, useState } from "react";

const ResponseStatus = createContext();
const ResponseStatusUpdateContext = createContext();

export const useResponseStatus = () => useContext(ResponseStatus);
export const useResponseStatusUpdater = () =>
	useContext(ResponseStatusUpdateContext);

const ResponseStatusProvider = ({ children }) => {
	const [responseStatus, setResponseStatus] = useState({
		correct: 0,
		incorrect: 0,
	});

	return (
		<ResponseStatus.Provider value={responseStatus}>
			<ResponseStatusUpdateContext.Provider value={setResponseStatus}>
				{children}
			</ResponseStatusUpdateContext.Provider>
		</ResponseStatus.Provider>
	);
};

export default ResponseStatusProvider;
