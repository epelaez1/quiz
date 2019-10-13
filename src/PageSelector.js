import React from 'react';
import Button from './Button'
export default class PageSelector extends React.Component {
	render() {
		const items = []

		for (var i = 0; i < this.props.numberOfQuestions; i++){
			items.push(<Button extraClasses={this.props.currentQuestion === i ? "disabled" : ""} value={i} text={i+1} action={this.props.onPageChange} />)
		}
		return (
			[
				<div className="page_selector">
					<Button extraClasses="large" 
						text="Prev" 
						value={this.props.currentQuestion === 0? 0 : this.props.currentQuestion - 1} 
						action={this.props.onPageChange}/>
		            { items }
					<Button 
						extraClasses="large" 
						text="Next"
						value={this.props.currentQuestion === this.props.numberOfQuestions - 1 ? this.props.currentQuestion : this.props.currentQuestion + 1}
						action={this.props.onPageChange}/>
		        </div>
			]

		)
	}
}