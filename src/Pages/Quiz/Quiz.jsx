import { useDispatch, useSelector } from "react-redux";
import styles from "./Quiz.module.css";
import { setCorrectAnswers } from "../../Store/User/userSlice";
import Question from "../../Components/Question";
import { useState } from "react";
const Quiz = () => {
    // const dispatch = useDispatch();
    const quizData = useSelector((state) => state.quiz.value);
    const userInfo = useSelector((state) => state.userData.value);
    const questions = quizData.questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions ? questions[currentQuestionIndex] : null;
    console.log(questions);
    console.log(userInfo);
    return (
        <div className={styles.Quiz}>
            <Question key={currentQuestionIndex} 
                questionData={currentQuestion ? currentQuestion: null}
                questionIndex={currentQuestionIndex}
            />
            <button onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}>hello</button>
            <button onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}>hi</button>
        </div>
    );
};

export default Quiz;