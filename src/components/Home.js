import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import { Link } from 'react-router-dom';


class Home extends React.Component {
	
	render() {
		
		return (
		
			<Link to ="/game" style={{marginTop:"100px", width:"300px", alignSelf:"center"}}>
				<Button
					extraClasses=""
					text="START GAME"
					value={0}
					action={(param) => null} />
			</Link>
			
		);
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

export default connect(mapStateToProps)(Home);
