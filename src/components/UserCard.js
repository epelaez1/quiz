import React from 'react';
export default class UserCard extends React.Component {
	render() {

		return (
			<div className="user_card">
				<img src={this.props.author.photo.url} alt={this.props.author.username} />
				<div className="info">
					Question sent by: <br />
					<b>{this.props.author.username}</b>
				</div>
			</div>
		)
	}
}