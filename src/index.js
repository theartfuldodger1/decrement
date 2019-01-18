import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class Decrement extends Component {
	state = { currentVal: this.props.initialValue };

	onDecrement() {
		let tempVal = this.state.currentVal;
		if(tempVal === 0) {
			alert("Cannot be less than zero");
		} else {
			tempVal = tempVal - 1;
			this.setState({currentVal: tempVal});
		}
	};

	render() {
		return (
			<div className="displayCenter">
				<button className="button" onClick={ () => this.onDecrement() }>
					Decrement
				</button>
				<p className="output">{ this.state.currentVal }</p>
			</div>
		)};
}

Decrement.propTypes = {
	initialValue: PropTypes.number.isRequired
};

class Display extends Component {
	renderDisplay(input) {
		return (<Decrement initialValue={input}/>);
	}

	render() {
		return (
			<div>
				<h1 className="displayCenter"><em>Countdown!</em></h1>
				{this.renderDisplay(7)}
			</div>
		)
		
	}
}

ReactDOM.render(<Display />, document.getElementById('root'));
