import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;

class List extends Component {
	render() {
		return (
			<div>list1</div>
		)
	}
}

ReactDOM.render(<List />, document.getElementById('root'));