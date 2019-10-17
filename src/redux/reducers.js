import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_CURRENT_QUESTION, FINISH_GAME, RESTART_GAME, INIT_GAME } from './actions'
function score(state = 0, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch (action.type) {
		case FINISH_GAME:
			return true;
		case RESTART_GAME:
			return false;
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch (action.type) {
		case CHANGE_CURRENT_QUESTION:
			return action.payload.index >= 0 ? action.payload.index : state;
		case RESTART_GAME:
		case FINISH_GAME:
			return 0;
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch (action.type) {
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return {
					...question,
					userAnswer: action.payload.index === i ?
						action.payload.answer : question.userAnswer
				}
			})
		case INIT_GAME:
			return action.payload.questions;
		case RESTART_GAME:
			return [];
		default:
			return state;
	}
}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions

}));

export default GlobalState;