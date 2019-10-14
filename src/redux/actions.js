export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_CURRENT_QUESTION = 'CHANGE_CURRENT_QUESTION';
export const FINISH_GAME = 'FINISH_GAME'
export const RESTART_GAME = 'RESTART_GAME'

export function questionAnswer(index, answer) {
	return { type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeCurrentQuestion(index){
	return { type: CHANGE_CURRENT_QUESTION, payload: {index}}
}

export function finishGame(){
	return { type: FINISH_GAME, payload: {}}
}

export function restartGame() {
	return { type: RESTART_GAME, payload: {}}
}