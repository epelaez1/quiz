import React from 'react';
import Button from './Button'
export default class Answer extends React.Component {
	render() {
		
		return (
			<div className="answer">
				<input type="text" placeholder="Answer..." value={ this.props.userAnswer || ""} 
					   onChange={(e)=> {
					   	this.props.onQuestionAnswer(e.target.value);
					   }}
				/>
				<Button extraClasses="" text="OK" value={this.props.currentQuestion + 1} action={this.props.onPageChange}/>

			</div>
		)
	}
}