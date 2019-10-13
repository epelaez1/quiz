export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_CURRENT_QUESTION = 'CHANGE_CURRENT_QUESTION';

export function questionAnswer(index, answer) {
	return { type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeCurrentQuestion(index){
	return { type: CHANGE_CURRENT_QUESTION, payload: {index}}
}