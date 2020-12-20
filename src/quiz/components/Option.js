import React from "react";

import "./Option.css";

function Option({ value }) {
	// const [optionValue, setOptionValue] = useState(value);

	return <div className="option">{value}</div>;
}

export default Option;
