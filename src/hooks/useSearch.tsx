import { useState, useEffect } from "react";
import sampleData from '../data/sample_table_data.json'
import { Data } from "../functions and types/typesAndInterfaces";

export default function useSearch(value: string, key: keyof Data) {
    //initialize search data as sample data by default
    const [searchData, setSearchData] = useState<Data[]>(sampleData);

    useEffect(() => {
        const filterData = (searchValue: string, key?: keyof Data | null) => {
            const filteredData = sampleData.filter((item) => {
                if (key && item[key].toString().toLowerCase().includes(searchValue.toLowerCase())) {
                    // Filter based on the selected search key
                    return item[key].toString().toLowerCase().includes(searchValue.toLowerCase());
                }
                else {
                    // Filter based on any key if the selected key isn't found
                    return Object.values(item).some((value) =>
                        value.toString().toLowerCase().includes(searchValue.toLowerCase())
                    );
                }
            });
            return filteredData
        };

        //set search data array to filtered data
        setSearchData(_prevData => filterData(value, key))
    }, [value, key])
    return [searchData]
}