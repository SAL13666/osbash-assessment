import { useState } from "react";
import { handleClick } from "@Utilities/Question/Question.utilites";
import styles from "./Question.module.css";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

const Question = ({questionData, questionIndex}) => {
    const [activeAnswer, setActiveAnswer] = useState(null);
    const dispatch = useDispatch();
    if(!questionData) {
        return;
    }
    const {question, choices} = questionData;
    return (
        <div className={styles.Question}>
            <h1><span>{questionIndex + 1} - </span>{question}</h1>
            <ul>
                {choices.map((choice, index) => {
                    return <li 
                        key={index} 
                        className={`${styles.Choice} ${index == activeAnswer ? styles.Active : null}`}
                        onClick={() => handleClick(index, setActiveAnswer, {questionIndex, answer: index}, dispatch)}>
                            <span>{index + 1} - </span>{choice}
                        </li>
                })}
            </ul>
        </div>
    );
};

Question.propTypes  = {
    questionData: PropTypes.shape({
        question: PropTypes.string,
        choices: PropTypes.arrayOf(PropTypes.string),
    }),
    questionIndex: PropTypes.number,
};

export default Question;