import { useState } from 'react';
import { GEO_URL, geoApiOptions } from '../app/Api';
import './LeftSide.css';
import axios from 'axios';


// const Select = () => {
// 	const [select, setSelect] = useState();
// 	const  currentCity = ({latitude, longitude} : any) => {
// 		const link = `${GEO_URL}/cities?location=${latitude}+${longitude}`
// 		const response = await fetch(link, geoApiOptions);
// 		const result = await response.json();
// 		return {

// 		}
// 	}
// }


// const Search = ({ onSearchChange }: any) => {
// 	const [search, setSearch] = useState();
// 	const loadOptions = async (inputValue: any) => {
		
// 		const url = `${GEO_URL}/cities?location=${inputValue}`;

// 		// TODO: use axios for best practices
// 		const response = await fetch(url, geoApiOptions);
// 		const result = await response.json();

// 		return {
// 			options: result.data.map((result: Record<string, string>) => ({
// 				value: `${result.latitude} ${result.longitude}`,
// 				label: `${result.name}`,
// 			})),
// 		};
// 	};

// 	const handleOnChange = (searchData: any) => {
// 		setSearch(searchData);
// 		onSearchChange(searchData);
// 	};

const Search = ({ setCity }: any) => {
	const [location, setLocation] = useState("");
  
	// Set the location state to the value of the input field
	const handleSubmit = (e:any) => {
	  e.preventDefault();
	  setCity(location);
	};
  
	return (
	  <div className="search-bar">
		<div className="omrs-input-group">
		  <form onSubmit={handleSubmit}>
			<label>
			  <input
				type="text"
				name="Location"
				value={location}
				required
				onChange={(e) => setLocation(e.target.value)}
			  />
			</label>
		  </form>
		</div>
	  </div>
	);
  };
  

export default Search;
