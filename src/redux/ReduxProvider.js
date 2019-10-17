import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import { HashRouter as Router, Route, Link  } from 'react-router-dom';
import Game from '../components/Game';
import Home from '../components/Home';
import ScoreBoard from '../components/ScoreBoard';

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

	render() {
		return (
			<Provider store={this.store}>
				<Router >
					<Link to="/" ><header>QUIZ</header></Link>
					<Route path="/game"  component={Game} />
					<Route path="/score" component={ScoreBoard} />
					<Route path="/" exact component={Home} />

				</Router>
			</Provider>
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState);
	}
}