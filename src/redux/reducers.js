import { combineReducers } from 'redux';
import { QUESTION_ANSWER , CHANGE_CURRENT_QUESTION } from './actions'
function score(state = 0, action = {}) {
	switch(action.type) {
		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_CURRENT_QUESTION:
			return action.payload.index >= 0? action.payload.index : state;
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map( (question, i) => {
				return { 
					...question,
					userAnswer: action.payload.index === i ?
								 action.payload.answer : question.usserAnswer
				}
			} )
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