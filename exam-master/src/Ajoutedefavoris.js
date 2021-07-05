import React from 'react';
import {useState} from "react";
export default function Ajoutedefavoris ({series,favorit}) {	
	const [favoris, setFavoris] = useState(favorit)
	const titleShow = series.title
	function addFavoris() {
		fetch(`http://localhost:4000/rest/shows/${series.id}`, {
		  method: 'PUT',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({
			  title: titleShow,
			  user: { favorited: !favoris } })
		  })
		  .then(response => response.json())
		  .then(setFavoris(!favoris))
	  }
	  
			let favBtnElement = (
				<button type="button" className="btn btn-danger" onClick={() => addFavoris()}>Ajouter aux favoris</button>)
			if (favoris === false){
			favBtnElement = (
				<button type="button" className="btn btn-danger" onClick={() => addFavoris()}>Ajouter aux favoris</button>
				)
			
			}else{
			favBtnElement = (
				<button type="button" className="btn btn-primary
				" onClick={() => addFavoris()}>Déjà ajouté aux favoris</button>
			)
			}
	
	return (

		favBtnElement
	
	)
}

