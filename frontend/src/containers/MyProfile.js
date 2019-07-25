import React, { Component } from "react";
import ProfileInfo from "../components/profileInfo";
import axios from 'axios';
import { userInfo } from "os";

class MyProfile extends Component {
	constructor(props) {
		super(props);
		// N’appelez pas `this.setState()` ici !
		this.state = { 
			firstName : "",
			lastName : "",
			username : "",
			email : "",
			tel : "",
			cell : "",
			city : ""
		};
	}
	render () {
		return (
			<div>
				<ProfileInfo 
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				username={this.state.username}
				email={this.state.email}
				tel={this.state.tel}
				cell={this.state.cell}
				city={this.state.city}
				/>
			</div>
		);
	}
	componentDidMount() {
		const url = 'http://localhost:8080/backend/api/client/1'
		axios.get(url).then(response => response.data)
		.then((data) => {
			let user_info = data[0]
			this.setState({ 
				firstName: user_info.firstName,
				lastName: user_info.lastName,
				username: user_info.username,
				email: user_info.email,
				tel: user_info.phone,
				cell: user_info.cellPhone,
				city : user_info.ville
			})
			// eslint-disable-next-line no-console
			console.log(user_info)
		})
	}
}
export default MyProfile;