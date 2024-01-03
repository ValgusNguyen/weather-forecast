import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_URL, geoApiOptions } from '../app/Api';
import './LeftSide.css';

const Search = ({ onSearchChange }: any) => {
	const [search, setSearch] = useState();
	const loadOptions = async (inputValue: any) => {
		// TODO: use new URL to build out the url before calling
		const url = `${GEO_URL}/cities?namePrefix=${inputValue}`;

		// TODO: use axios for best practices
		const response = await fetch(url, geoApiOptions);
		const result = await response.json();

		// console.log(result);
		return {
			options: result.data.map((result: Record<string, string>) => ({
				value: `${result.latitude} ${result.longitude}`,
				label: `${result.name}`,
			})),
			hasMore: true,
		};
	};

	const handleOnChange = (searchData: any) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<div className="searchBar">
			<AsyncPaginate
				placeholder="Search your city"
				debounceTimeout={600}
				value={search}
				onChange={handleOnChange}
				loadOptions={loadOptions}
			/>
		</div>
	);
};

export default Search;
