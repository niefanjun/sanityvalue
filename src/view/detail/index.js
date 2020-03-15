import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;

class Detail extends Component {
	render() {
		return (
			<div>Detail</div>
		)
	}
}

ReactDOM.render(<Detail />, document.getElementById('root'));