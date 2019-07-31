import React, { Component } from "react";
import LoginComponent from "../components/loginComponent";
import CAS from '@noveogroup/cas';
import axios from "axios";
import { withRouter } from "react-router";

var cas = new CAS({
	base_url: 'https://cas.usherbrooke.ca', 
	service: 'http://localhost:3000/login',
	version: 2.0
});

class Login extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let ticket = this.props.location.search.replace("?ticket=", "")
		if (localStorage.getItem('isAuthenticated') === 'true') {
			console.log("AlreadyAuthenticated")
		}
		else if (ticket) {
			let url = `https://cas.usherbrooke.ca/serviceValidate?service=http://localhost:3000/login&ticket=${ticket}`
			axios.get(url).then(response => response.data)
			.then((data) => {
				let parser = new DOMParser()
				let xmlDoc = parser.parseFromString(data,'text/xml')
				if(xmlDoc.getElementsByTagName('cas:authenticationSuccess')[0]) {
					localStorage.setItem('email', xmlDoc.getElementsByTagName('cas:courriel')[0].childNodes[0].textContent)
					localStorage.setItem('fullname', xmlDoc.getElementsByTagName('cas:nomAffichage')[0].childNodes[0].textContent)
					localStorage.setItem('firstname', xmlDoc.getElementsByTagName('cas:prenom')[0].childNodes[0].textContent)
					localStorage.setItem('lastname', xmlDoc.getElementsByTagName('cas:nomFamille')[0].childNodes[0].textContent)
					localStorage.setItem('cip', xmlDoc.getElementsByTagName('cas:cip')[0].childNodes[0].textContent)
					localStorage.setItem('isAuthenticated', true)

				} else {
					window.location.href = '/cas'; 
				}
			}).then(() => {
				let needCreate = false
				const url = 'http://localhost:8080/backend/api/user';
				axios.get(url + '?cip=' + localStorage.getItem('cip')).then(response => response.data)
				.then((data) => {
					let user_info = data
					if (user_info) {
						if (!user_info.email) {
							needCreate = true
						}
					}
				}).then(() => {
					if (needCreate) {
						let user = {
							cip: localStorage.getItem('cip'),
							firstName: localStorage.getItem('firstname'),
							lastName: localStorage.getItem('lastname'),
							username: localStorage.getItem('fullname'),
							email: localStorage.getItem('email'),
							phone: '',
							city : ''
						}
						const url = 'http://localhost:8080/backend/api/user';
						axios.put(url, user).then(response => response.data)
							.then((data) => {
								// eslint-disable-next-line no-console
								//console.log(data)
							});
					}
					this.props.history.push('/')
				})
			});
		} else {
			window.location.href = '/cas'; 
		}


		console.log(this.context);
	}

	render () {
		return (
			<div>
			
			</div>
		);
	}
}

export default Login;