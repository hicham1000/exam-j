import React from 'react';
import {useState, useEffect} from 'react';
import Series from './Series';
import './App.css';

export default function Search(props) {
	const[datas,setDatas]=useState([]);
	useEffect(()=> {
		fetch('http://localhost:4000/rest/shows')
		  .then(response => response.json())
		  .then(show => setDatas(show))
		}, [])
	const[searchWord,setSearchWord]=useState("");
	const handleSearchWord = (e) => {
	let value = e.target.value	
	setSearchWord(value);
	};

	return (
		<section className="searchbox-wrap">
		<input type="text"
			placeholder="Search for a series..."
			className="searchbox"
			id="SearchBar"
			onChange={handleSearchWord}/>
	<div className="search_results">
		{datas.filter((val)=>{
			return val.title.toLowerCase().includes(searchWord);
		})
		.map((val)=>{
			return(
				<div className="search_result search container" key={val.id} ><Series series={val}/></div>
			)
		})}
	</div>
	</section>
	);
}




