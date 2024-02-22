import { useState } from "react";
import { handleClick } from "../Utilities/Question.utilites";
import styles from "./Question.module.css";
import PropTypes from 'prop-types';

const Question = ({questionData, questionIndex}) => {
    const [activeAnswer, setActiveAnswer] = useState(null)
    if(!questionData) {
        return;
    }
    const {question, choices, correct_choice, degree } = questionData;
    return (
        <div className={styles.Question}>
            <h1><span>{questionIndex + 1} - </span>{question}</h1>
            <ul>
                {choices.map((choice, index) => {
                    return <li 
                        key={index} 
                        className={`${styles.Choice} ${index == activeAnswer ? styles.Active : null}`}
                        onClick={() => handleClick(index, setActiveAnswer)}>
                            {choice}
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
        correct_choice: PropTypes.number,
        degree: PropTypes.number,
    }),
    questionIndex: PropTypes.number,
};

export default Question;