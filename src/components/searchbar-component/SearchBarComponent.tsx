import React, { ChangeEvent } from 'react';
import { Data } from '../../functions and types/typesAndInterfaces';
import { tableDataTypes } from '../../functions and types/typesAndInterfaces';


interface SearchBarProps {
    updateSearchValue: React.Dispatch<React.SetStateAction<string>>
    updateSearchKey: React.Dispatch<React.SetStateAction<keyof Data>>
}

const SearchBar: React.FC<SearchBarProps> = ({ updateSearchValue, updateSearchKey }) => {

    const handleSearchKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateSearchValue(_prevValue => event.target.value);
        //update search value in parent component
    };

    const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
        updateSearchKey(_prevKey => event.target.value as keyof Data);
        //update search key in parent component

    };
    return (
        //searchbar ui element
        <div className="flex items-center justify-center space-x-4">
            <input
                type="text"
                placeholder="🔎 Search..."
                onChange={handleSearchKeyChange}
                className="border p-2"
            />
            <select
                onChange={handleDropdownChange}
                className="border p-2"
            >
                <option value="" disabled>Select a search key</option>
                {tableDataTypes.map((key) => {
                    if (key === 'name') {
                        return (
                            <option key={key} value={key} selected>
                                {key.toUpperCase()}
                            </option>
                        )
                    }
                    else {
                        return (
                            <option key={key} value={key}>
                                {key.toUpperCase()}
                            </option>
                        )
                    }
                })}
            </select>
        </div>
    );
};

export default SearchBar;
