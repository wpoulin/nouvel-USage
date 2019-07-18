import React, { Component } from "react";
import ProfileInfo from "../components/profileInfo";
/*import axios from 'axios';*/

class MyProfile extends Component {
	render () {
		return (
			<div>
				<ProfileInfo 
				firstName={"John"}
				lastName={"Travolta"}
				username={"Jtrav420"}
				email={"j.travolta@hollywood.com"}
				tel={"1-234-567-8900"}
				cell={""}
				city={"Hollywood"}
				/>
			</div>
		);
	}
	/*componentDidMount() {
		const url = 'http://localhost:8080/backend/api/client/1'
		axios.get(url).then(response => response.data)
		.then((data) => {
			this.setState({ user: data[0] })
			// eslint-disable-next-line no-console
			console.log(this.state.users)
		})
	}*/
}
export default MyProfile;