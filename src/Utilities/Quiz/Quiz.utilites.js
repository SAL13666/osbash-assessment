import { incrementScore, pushToCorrectAnswers, pushToIncorrectAnswers } from "@Store/User/userSlice";
export const handleGetScores = (questions, userInfo, dispatch) => {
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
}

export const handleNext = (userInfo, currentQuestionIndex, setCurrentQuestionIndex, setError) => { // need change
    if(userInfo.answers[`question ${currentQuestionIndex}`] === undefined) {
        setError(true)
        return;
    }
    setCurrentQuestionIndex((prev) => prev + 1)
}