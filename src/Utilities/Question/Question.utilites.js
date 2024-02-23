import { setAnswers } from "@Store/User/userSlice";

export function handleClick(index, setActiveAnswer, answerInfo, dispatch) {
    setActiveAnswer(index);
    dispatch(setAnswers({
        questionName :`question ${answerInfo.questionIndex}`,
        answer: answerInfo.answer,
    }))
}