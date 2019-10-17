import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import PageSelector from './PageSelector';
import Button from './Button';
import { Link } from 'react-router-dom';
import { questionAnswer, changeCurrentQuestion, finishGame, restartGame, initGame } from '../redux/actions';

var loadQuestions = function(props) {
	if (props.questions.length===0) {
		fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=5ef285733ffdf65b8049")
			.then((res) => res.json())
			.then(questions => {
				return props.dispatch(initGame(questions))
			})
	}
}

class Game extends React.Component {
	componentDidMount() {
		loadQuestions(this.props)
	}
	componentDidUpdate(){
		loadQuestions(this.props)
	}
	render() {
		if (this.props.questions.length === 0) {
			return (<h2> Loading... </h2>)
		}
		return (
			<>
				
				<Question numberOfQuestions={this.props.questions.length} currentQuestion={this.props.currentQuestion} question={this.props.questions[this.props.currentQuestion]}
					onQuestionAnswer={(answer) => {
						this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
					}}
					onPageChange={(index) => {
						this.props.dispatch(changeCurrentQuestion(index))
					}}
				/>
				<PageSelector currentQuestion={this.props.currentQuestion} numberOfQuestions={this.props.questions.length}
					onPageChange={(index) => {
						this.props.dispatch(changeCurrentQuestion(index))
					}}
				/>
				<Link to="/score"  >
					<Button
						extraClasses=""
						text="SUBMIT"
						value={0}
						action={(param) => {
							this.props.dispatch(finishGame())
						}} />
				</Link>
				<div style={{ marginTop: "10px" }} ></div>
				<Link to ="/game"  >
					<Button
						extraClasses=""
						text="RESTART GAME"
						value={0}
						action={(param) => {
							this.props.dispatch(restartGame())
					}} />
				</Link>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

export default connect(mapStateToProps)(Game);
