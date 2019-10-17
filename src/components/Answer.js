import React from 'react';
import Button from './Button';
export default class Answer extends React.Component {
	render() {
		const isLastQuestion = this.props.currentQuestion === this.props.numberOfQuestions - 1;
		const nextQuestion = isLastQuestion ? this.props.currentQuestion : this.props.currentQuestion + 1
		return (
			<form className="answer" onSubmit={(e) => {
				e.preventDefault();
				this.props.onPageChange(nextQuestion)
			}}>
				<input type="text" placeholder="Answer..." value={this.props.userAnswer || ""}
					onChange={(e) => {
						this.props.onQuestionAnswer(e.target.value);
					}}
				/>

				<Button extraClasses={isLastQuestion ? "disabled" : ""} text="OK" value={nextQuestion} action={this.props.onPageChange} />
			</form>
		)
	}
}