import { useState } from 'react';
import { GEO_URL, geoApiOptions } from '../app/Api';
import './LeftSide.css';
import axios from 'axios';

const Search = ({ setCity }: any) => {
	const [location, setLocation] = useState("");
  
	// Set the location state to the value of the input field
	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
	  e.preventDefault();
	  setCity(location);
	};
  
	return (
	  <div className="search-bar">
		<div className="omrs-input-group">
		</div>
	  </div>
	);
  };
  

export default Search;
