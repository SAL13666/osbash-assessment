import { useDispatch, useSelector } from "react-redux";
import styles from "./Quiz.module.css";
import Question from "../../Components/Question";
import { useState } from "react";
import { Link } from "react-router-dom";
import { incrementScore, pushToCorrectAnswers, pushToIncorrectAnswers } from "../../Store/User/userSlice";
const Quiz = () => {
    const dispatch = useDispatch();
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
            {currentQuestionIndex == questions?.length - 1 ? (
                <Link to={"/Scores"} onClick={() => {
                    questions.map(question => {
                        return question.correct_choice;
                    }).forEach((correctChoice, index) => {
                        const degree = questions[index].degree;
                        const userAnswer = userInfo.answers[`question ${index}`];
                        if(userAnswer == correctChoice - 1) {
                            dispatch(incrementScore(degree));
                            dispatch(pushToCorrectAnswers({index, answer: userAnswer}))
                        } else {
                            dispatch(pushToIncorrectAnswers({index, answer: userAnswer, correctChoice: correctChoice - 1}))
                        }
                    });
                }}>get Results</Link>
                ): 
                <button onClick={() => {
                    
                    if(userInfo.answers[`question ${currentQuestionIndex}`] === undefined) { //need change
                        console.log("error");
                        return;
                    }
                    setCurrentQuestionIndex((prev) => prev + 1)
                }}>next</button>
            }
            <button onClick={() => setCurrentQuestionIndex((prev) => prev - 1)} disabled={currentQuestionIndex == 0}>back</button>
        </div>
    );
};

export default Quiz;