import React from 'react';
export default class Button extends React.Component {
	render() {
		return (
                  <div className={"button " + this.props.extraClasses}
                        value={this.props.value}
                        onClick={(e) => {
                              this.props.action(parseInt(e.target.getAttribute("value")));
                        }}>
                        {this.props.text}
                  </div>

		)
	}
}