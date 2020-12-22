import React, { useEffect } from "react";
import { useTimer } from "../../hooks/timer-hook";

import "./Next.css";

const Next = ({active}) => {

    const {timerValue,start,stopped,pause,resume,resetTimer} = useTimer(5);

    useEffect(() => {
        if(active) start();
    },[active,start])
    
	return <button disabled={!active} className="next-btn">next({timerValue})</button>;
};

export default Next;
