import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_URL, geoApiOptions } from '../app/Api';
import "./LeftSide.css"

const Search = ({ onSearchChange }: any) => {
	const [search, setSearch] = useState();
	const loadOptions = async (inputValue: any) => {
		try {
			// TODO: use new URL to build out the url before calling
			// const url = `${GEO_URL}/cities?namePrefix=${inputValue}`;
			const url = `${GEO_URL}/cities?namePrefix=`;

			// TODO: use axios for best practices
			const response = await fetch(url, geoApiOptions);

			const result = await response.json();

			// console.log(result);
			const location = result.data.map((result: Record<string, string>) => ({ 
				value: `${result.latitude} ${result.longitude}`, 
				label: `${result.name}`,
			}));
			// console.log(location,"loc")
			return location;
		} catch (error) {
			// TODO: find a way to handle error in api call failed
			console.error(error);
		}
	};

	const handleOnChange = (searchData: any) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
			<div className="searchBar">
				<AsyncPaginate placeholder="Search your city" debounceTimeout={600} value={search} onChange={handleOnChange} loadOptions={loadOptions} />
			</div>
	);
};

export default Search;
