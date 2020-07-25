import React from 'react';
import './home.less';

class Home extends React.Component {
	constructor(props) {
		super(props);
		console.log('test');
	}
	name = '1231231';
	render() {
		return (
			<div className="App">
				{this.name}
			</div>
		)
	}
}

export default Home;