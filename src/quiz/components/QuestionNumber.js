import React from 'react'

import "./QuestionNumber.css"

function QuestionNumber(props) {

    const {current,total} = props;

    return (
        <div className="question-number">
            {`Q ${current} / ${total}`}
        </div>
    )
}

export default QuestionNumber;
