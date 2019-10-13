import React from 'react';
export default class Tips extends React.Component {
	render() {
		if (this.props.tips.length){

			return (
				<div className="tips">
					Tips:				
					<ul>
						{this.props.tips.map( (tip, index) => {
							return<li> {this.tip} </li>
						})}
					</ul>
				</div>
			)
		}

		return ( <div className="tips"> There are no tips for this question </div> )
	}
}