import { useState, useEffect } from "react";
import { sortByKey } from "../functions and types/sort";

interface Data {
    "id": number,
    "name": string,
    "quantity": number,
    "category": string,
    "price": number,
    "description": string
}
type SortDirection = 'asc' | 'desc';

export default function useSort(data: any[], key: keyof Data, sortDirection: SortDirection) {
    const [sortedData, sortData] = useState(data)

    useEffect(() => {
        let newData = (sortByKey(data, key, sortDirection)) //update the data order
        sortData((_prev: any) => [...newData])
    }, [data, key, sortDirection])

    return[sortedData]

}
