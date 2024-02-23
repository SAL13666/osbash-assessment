import styles from "./Scores.module.css";
import { useDispatch, useSelector } from "react-redux";
import Answer from "@Components/Answer/Answer";
import Button from "@Components/Button/Button";
import { resetUserData } from "@Store/User/userSlice";

const Scores = () => {
    const userData = useSelector((state) => state.userData.value);
    const quizData = useSelector((state) => state.quiz.value);
    const dispatch = useDispatch();

    if (!userData || !quizData) {
        return <div>Loading...</div>;
    }

    const { correctAnswers, incorrectAnswers, score } = userData;
    const { questions, 'Tot degree': totalDegree } = quizData;

    const handleRetakeQuiz = () => {
        dispatch(resetUserData());
    };

    return (
        <div className={styles.Scores}>
            <h1>you scored {score}/ {totalDegree}</h1>
            <div className={styles.Header}>
                <p>Question</p>
                <p>Your Answer</p>
                <p>Correct Answer</p>
            </div>
            {correctAnswers.map((answer, index) => (
                <Answer
                    key={index}
                    answer={questions[answer.index].choices[answer.answer]}
                    question={questions[answer.index].question}
                    correct={true}
                    correctAnswer={questions[answer.index].choices[questions[answer.index].correct_choice - 1]}
                />
            ))}
            {incorrectAnswers.map((answer, index) => (
                <Answer
                    key={index}
                    answer={questions[answer.index].choices[answer.answer]}
                    question={questions[answer.index].question}
                    correct={false}
                    correctAnswer={questions[answer.index].choices[answer.correctChoice]}
                />
            ))}
            <Button
                title={"Retake The Quiz"}
                link={true}
                to="/"
                onClick={handleRetakeQuiz}
                style={{ marginTop: "30px" }}
            />
        </div>
    );
};

export default Scores;
