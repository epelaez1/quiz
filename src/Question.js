import React from 'react';
import UserCard from './UserCard';
import Answer from './Answer';
import Tips from './Tips'
export default class Question extends React.Component {
	render() {
		const default_photo = {
			filename : 'default.jpg',
			mime : 'image/jpeg',
			url : '/default.jpg'
		}
		const default_user = {
			id : -1,
			isAdmin: false,
			username: 'Anonymous',
			photo: default_photo
		}
		const author = this.props.question.author || default_user;
		author.photo = author.photo || default_photo;

		return (
			<div className="question_card">
				<div className="question_image">
					<img src={this.props.question.attachment? this.props.question.attachment.url : "/default.jpg"} alt="Default" /> 
					
					<UserCard author={ author } />
				</div>
				<div className="question">
					{this.props.question.question}
				</div>
				<Tips tips={this.props.question.tips} />
				<Answer onPageChange={this.props.onPageChange}
					currentQuestion={this.props.currentQuestion} 
					onQuestionAnswer={this.props.onQuestionAnswer} 
					userAnswer={ this.props.question.userAnswer}/>

			</div>

		)
	}
}