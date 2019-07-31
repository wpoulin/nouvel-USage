import React, { Component } from "react";
import ProfileInfo from "../components/profileInfo";
import axios from 'axios';

class MyProfile extends Component {
	constructor(props) {
		super(props);
		// N’appelez pas `this.setState()` ici !
		this.state = { 
			cip: "",
			firstName : "",
			lastName : "",
			username : "",
			email : "",
			tel : "",
			city : ""
		};
	}
	
	render () {
		return (
			<div>
				<ProfileInfo 
				cip={this.state.cip}
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				username={this.state.username}
				email={this.state.email}
				tel={this.state.tel}
				city={this.state.city}
				/>
			</div>
		);
	}
	componentDidMount() {
		let cip = localStorage.getItem('cip');
		const url = 'http://localhost:8080/backend/api/user';
		axios.get(url + '?cip=' + cip).then(response => response.data)
		.then((data) => {
			let user_info = data

			if (user_info) {
				this.setState({ 
					cip: user_info.cip,
					firstName: user_info.firstName,
					lastName: user_info.lastName,
					username: user_info.username,
					email: user_info.email,
					tel: user_info.phone,
					city : user_info.city
				})
			}
		})
	}
}
export default MyProfile;