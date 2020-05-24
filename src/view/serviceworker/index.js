import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const { Component } = React;

class ServiceWorker extends Component {
	componentDidMount() {
		console.log('componentDidMount');
		navigator.serviceWorker.register('./test.js',{
	        scope: './'
	    }).then(function(registration) {
			let serviceWorker;
			if (registration.installing) {
				serviceWorker = registration.installing;
				console.log('installing')
			} else if (registration.waiting) {
				serviceWorker = registration.waiting;
				console.log('waiting')
			} else if (registration.active) {
				serviceWorker = registration.active;
				console.log('active')
			}
			if (serviceWorker) {
				serviceWorker.addEventListener('statechange', function (e) {
					console.log('状态改变为',e.target.state)
				});
			}
		},function(err) {
			console.log(err,'err');
		})
		navigator.serviceWorker.ready.then((registration) => {
			console.log('ready');
			this.clicktest = () => {
				registration.sync.register('submit').then(() => {
					console.log('sync registered!');
				});
			}
		})
		navigator.serviceWorker.addEventListener('message', function(event) {
		    console.log(event.data);
		})
		// 注册通信信道
		this.channel = new MessageChannel();
		let p1 = this.channel.port1;
		p1.onmessage = (msg) => {console.log(msg,'我通过管道收到了信息')};
	}
	clicktest = () => {}
	sendmsg = () => {
		if (navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage) {
			navigator.serviceWorker.controller.postMessage({
				name: 'nfj'
			},[this.channel.port2]);
		}
	}
	render() {
		return (
			<div class="serviceworker">
				<img src="./doll.jpg"/>
				<button onClick={() => {this.clicktest()}}>test</button>
				<button onClick={this.sendmsg}>msg</button>
			</div>
		)
	}
}

ReactDOM.render(<ServiceWorker />, document.getElementById('root'));