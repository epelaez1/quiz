import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import App from '../App';
// import { questions } from "../assets/mock-data";

export default class ReduxProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = { 
			score: 0,
			finished: false,
			currentQuestion: 0,
			questions: []
		};
		this.store = this.configureStore();
	}

	render(){
		return (
			<Provider store={ this.store }>
				<App store={ this.store }/>
			</Provider>
		);
	}

	configureStore(){
		return createStore(GlobalState, this.initialState);
	}
}