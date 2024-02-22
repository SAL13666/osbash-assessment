import { useEffect } from "react";
import styles from "./Scores.module.css";
import { useSelector } from "react-redux";
import Answer from "../../Components/Answer/Answer";
const Scores = () => {
    const {correctAnswers, incorrectAnswers, score} = useSelector((state) => state.userData.value);
    const {questions, 'Tot degree': totalDegree} = useSelector((state) => state.quiz.value);
    return (
        <div className={styles.Scores}>
            <h1>you scored {score}/ {totalDegree}</h1>
            <div className={styles.Header}>
            <p>Question</p>
            <p>yourAnswer</p>
            <p>Correct Answer</p>
            </div>
            {correctAnswers.map((answer, index) => <Answer 
            key={index} 
            answer={questions[answer.index].choices[answer.answer]} 
            question={questions[answer.index].question}
            correct={true}
            correctAnswer={questions[answer.index].choices[questions[answer.index].correct_choice - 1]}
            />)}
            {incorrectAnswers.map((answer, index) => <Answer 
            key={index} 
            answer={questions[answer.index].choices[answer.answer]} 
            question={questions[answer.index].question}
            correct={false}
            correctAnswer={questions[answer.index].choices[answer.correctChoice]}
            />)}
        </div>
    );
};

export default Scores;