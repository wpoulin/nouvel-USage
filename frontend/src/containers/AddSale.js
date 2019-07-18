import React, { Component } from "react";
import NewSaleInfo from "../components/newSaleInfo";

class AddSale extends Component {
	render () {
		return (
			<div className="add-sale">
				<h1>Créer ou modifier une annonce</h1>
				<NewSaleInfo 
				/>
			</div>
		);
	}
}

export default AddSale;