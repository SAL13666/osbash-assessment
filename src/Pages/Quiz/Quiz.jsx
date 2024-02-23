import { useDispatch, useSelector } from "react-redux";
import styles from "./Quiz.module.css";
import Question from "@Components/Question/Question";
import { useState } from "react";
import Button from "@Components/Button/Button";
import { handleNext, handleGetScores } from "@Utilities/Quiz/Quiz.utilites";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Quiz = () => {
    const dispatch = useDispatch();
    const quizData = useSelector((state) => state.quiz.value);
    const userInfo = useSelector((state) => state.userData.value);
    const questions = quizData.questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions ? questions[currentQuestionIndex] : null;
    const [error, setError] = useState(false);
    return (
        
        <div className={styles.Quiz}>
            <Collapse in={error} style={{position:"absolute", top:"0", left: "50%",translate:"-50% 0%"}}>
                <Alert action={<IconButton onClick={() => setError(false)}><CloseIcon/></IconButton>}  variant="filled" severity="error">Please Pick An Answer</Alert>
                </Collapse>
            <Question key={currentQuestionIndex} 
                questionData={currentQuestion ? currentQuestion: null}
                questionIndex={currentQuestionIndex}
            />
            <div className={styles.Controls}>
                <Button onClick={() => setCurrentQuestionIndex((prev) => prev - 1)} disabled={currentQuestionIndex == 0} title={"back"}/>
                {currentQuestionIndex == questions?.length - 1 ? (
                    <Button title={"get Results"} link={true} to="/Scores" onClick={() => handleGetScores(questions, userInfo, dispatch)}/>
                    ) : (
                        <Button title={"next"} link={false} onClick={() => handleNext(userInfo, currentQuestionIndex, setCurrentQuestionIndex, setError)}/>
                        )
                }
            </div>
        </div>
    );
};

export default Quiz;