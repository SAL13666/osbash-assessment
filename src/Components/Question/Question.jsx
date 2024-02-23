import { useState } from "react";
import { handleClick } from "@Utilities/Question/Question.utilites";
import styles from "./Question.module.css";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

const Question = ({ questionData, questionIndex }) => {
    const [activeAnswer, setActiveAnswer] = useState(null);
    const userAnswers = useSelector((state) => state.userData.value.answers);
    const dispatch = useDispatch();
    console.log(userAnswers);
    if (!questionData) {
        return <div>Loading...</div>;
    }

    const { question, choices } = questionData;

    return (
        <div className={styles.Question}>
            <h1 aria-label={question}><span>{questionIndex + 1} - </span>{question}</h1>
            <ul>
                {choices.map((choice, index) => (
                    <li
                        key={index}
                        className={`${styles.Choice} ${index === activeAnswer || index === userAnswers[`question ${questionIndex}`] ? styles.Active : ''}`}
                        onClick={() => handleClick(index, setActiveAnswer, { questionIndex, answer: index }, dispatch)}
                        tabIndex={0}
                        aria-label={choice}
                    >
                        <span>{index + 1} - </span>{choice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Question.propTypes = {
    questionData: PropTypes.shape({
        question: PropTypes.string,
        choices: PropTypes.arrayOf(PropTypes.string),
    }),
    questionIndex: PropTypes.number,
};

export default Question;
