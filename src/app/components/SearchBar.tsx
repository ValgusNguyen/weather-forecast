import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_URL, geoApiOptions } from '../Api';

const Search = ({ onSearchChange }: any) => {
	const [search, setSearch] = useState();
	const loadOptions = async () => {
		try {
			// TODO: use new URL to build out the url before calling
			const url = `${GEO_URL}?namePrefix=hanoi`;

			// TODO: use axios for best practices
			const response = await fetch(url, geoApiOptions);

			const result = await response.json();

			console.log(result);
			return result;
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
		<div>
			<button onClick={loadOptions}>Button</button>
			{/* <div className="search-bar"> */}
			{/*   <AsyncPaginate */}
			{/*     placeholder="city" */}
			{/*     debounceTimeout={600} */}
			{/*     value={search} */}
			{/*     onChange={handleOnChange} */}
			{/*     loadOptions={loadOptions} */}
			{/*   /> */}
			{/* </div> */}
		</div>
	);
};

export default Search;
