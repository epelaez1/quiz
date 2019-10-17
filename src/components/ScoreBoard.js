import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from './Button';

import {  restartGame } from '../redux/actions';

class ScoreBoard extends React.Component {
	render() {
		var score = 0;
		this.props.questions.forEach((question) => {
			if (question.userAnswer && question.answer.toLowerCase() === question.userAnswer.toLowerCase()) {
				score++;
			}
		})
		const questions = this.props.questions.map((question, index) => {
			const isCorrect = question.userAnswer && question.answer.toLowerCase() === question.userAnswer.toLowerCase()
			const result = isCorrect
				? "correct"
				: question.userAnswer && question.userAnswer !== '' ? "wrong" : "empty"
			return (
				<div className={"question_resume " + result} key={index}>
					<div><img src={question.attachment ? question.attachment.url : "./default.jpg"} alt="Default" /></div>
					<span >{question.question}</span>
					<span className="user_answer">{question.userAnswer ? question.userAnswer : ""}</span>
					<span >{result}</span>

				</div>
			)
		})
		return (
			<>
				
				<div > YOUR SCORE: {score}</div>
				<div  className="answers">{questions}</div>
				<Link to ="/game">
					<Button
						extraClasses=""
						text="RETRY QUIZZES"
						value={0}
						action={()=>null} />
				</Link>
				<div  style={{ marginBottom: "10px" }}></div>
				<Link to ="/game" >
					<Button
						extraClasses=""
						text="RESTART GAME"
						value={0}
						action={(param) => {
							this.props.dispatch(restartGame())
					}} />
				</Link>
				
			</>
		)
	}
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(ScoreBoard);
