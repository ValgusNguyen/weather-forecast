import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_url, geoApiOptions } from "../Api"
import styles from './page.module.css'

const Search = ({onSearchChange}: any) => {
    const [search, setSearch] = useState();
    const loadOptions = async (inputValue: string) => {
        try {
            const response = await fetch(`${Geo_url}/namePrefix=${inputValue}`, geoApiOptions);
            const result = await response.text();
            console.log(result);
            // return result;
        } catch (error) {
            console.error(error);

        }
    }

    const handleOnChange = (searchData: any) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <div>  
            <div className= "search-bar">
                <AsyncPaginate
                    placeholder = "city"
                    debounceTimeout = {600}
                    value = {search}
                    onChange = {handleOnChange}
                    // loadOptions = {loadOptions}
                />
            </div>
        </div>
    );
}

export default Search;