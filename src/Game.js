import React from 'react';
export default class Game extends React.Component {
	render() {
		return (
			[
				<div className="question_image">
					<img src={this.props.question.attachment? this.props.question.attachment.url : "/default.jpg"}  alt="Madrid"/> 
					<div className="user">
						{ (()=>{
							if (this.props.question.author) {
								return (
									<div className="user_card">
										<img src={this.props.question.author.photo.url} alt={this.props.question.author.username}/> Question send by {this.props.question.author.username} 
									</div>
								);
							}else{
								return "Question made by Anonimous"
							}
						})()}
						

					</div>
				</div>,
				<div className="question">
					{this.props.question.question}
					<div className="asnwer">
						<input type="text" value={this.props.question.userAnswer} 
							   onChange={(e)=> {this.props.onQuestionAnswer(e.target.value)}}
						/>
						<div className="button">OK</div>
					</div>
				</div>,
				<div className="tips">
					Tips:				
					<ul>
						{this.props.question.tips.map( (tip, index) => {
							return<li> {this.tip} </li>
						})}
					</ul>
				</div>
			
			

			]

		)
	}
}