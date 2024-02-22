import PropTypes from 'prop-types';
import styles from "./Answer.module.css";
const Answer = ({question, answer, correct, correctAnswer}) => {
    return (
        <div className={styles.Answer}>
            <p>{question}</p>
            {
            correct ? (
                <>
                    <p className={styles.Correct}>{answer}</p>
                    <p className={styles.Correct}>{correctAnswer}</p>
                </>
                ) : (
                <>
                    <p className={styles.Incorrect}>{answer}</p>
                    <p className={styles.Correct}>{correctAnswer}</p>
                </>
            )
        }
        </div>
    );
};
Answer.propTypes  = {
    question: PropTypes.string,
    answer: PropTypes.string,
    correct: PropTypes.bool,
    correctAnswer: PropTypes.string,
};
export default Answer;