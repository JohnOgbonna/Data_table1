import { useState } from "react"
import './TableComponent.scss'
import dropDownArrow from '../../assets/icons/drop-down-arrow.svg'
import SearchBar from "../searchbar-component/SearchBarComponent"
import useSearch from "../../hooks/useSearch"
import useSort from "../../hooks/useSort"
import { SortDirection, tableDataTypes, sortDirectionOptions, Data } from "../../functions and types/typesAndInterfaces"


const TableComponent = () => {

    // initialize states for data to be shown, sorted and searched 
    const [sorting, setSorting] = useState<any>('id')
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
    const [searchValue, setSearchValue] = useState('');
    const [selectedSearchKey, setSelectedSearchKey] = useState<keyof Data>('name');
    // call custom hooks to search data and sort data
    const [searchData] = useSearch(searchValue, selectedSearchKey)
    const [sortedData] = useSort(searchData, sorting, sortDirection)
    //after searching data, the data is then sorted

    return (
        <>
            <div className={'grid grid-rows gap-4 sm:text-xs shadow-lg min-w-[503px] pb-8 max-w-[1280px] mx-auto my-2'}>

                {/* top row allows user to chose ascending or decending order */}
                <div className='flex items-center justify-center mb-0 gap-2'
                    onClick={() => {
                        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
                    }}
                >
                    <h2 className='text-[26px] sm:text-[1rem]'>{`Sorting By: ${sorting.toUpperCase()} Order: ${sortDirectionOptions[sortDirection]}`}</h2>
                    {/* rotate arrow based on ascending or descending  */}
                    <img
                        className={`h-[30px] sm:h-[19px] transition-all duration-500 ${sortDirection == 'asc' ? 'rotate-180' : ''}`}
                        src={dropDownArrow} alt='dropDownArrow' />
                </div>
                {/* //call searchbar component and pass in state update functions */}
                <SearchBar
                    updateSearchValue={setSearchValue}
                    updateSearchKey={setSelectedSearchKey}
                />
                <p>Select Category Header to Change Sorting Key</p>
                <p className='mb-1'>{`${sortedData ? sortedData.length : searchData.length} Items`}</p>
                {/* // first row with headers for column */}
                <ul className="grid grid-cols-7 border-t-2 mt-1 pt-2">
                    {
                        //use map to set the first row with the column hearders, along with an onclick that allows the user to sort by that column
                        tableDataTypes.map(type => {
                            return (
                                //Change styles based on if column is being used as sorted key
                                <li className={`hover:underline hover:scale-105 ${sorting === type ? 'underline font-bold text-red-800 ' : ''}${type === 'description' ? 'col-span-2 sm:text-xs' : 'col-span-1 sm:text-xs'}`}
                                    onClick={() => {
                                        if (sorting === type) {
                                            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
                                        }
                                        else setSorting(type)
                                    }}
                                >{type.toUpperCase()}</li>
                            )
                        })
                    }
                </ul>
                {
                    sortedData.map((item: { [x: string]: any }) => {
                        const categoryArray = Object.keys(item) //initialize new array based on the classification categories to map, return unordered list with list items of each value
                        return (
                            <ul className="grid grid-cols-7  border-b-2 align-middle">
                                {
                                    categoryArray.map(category => {
                                        //display is what is to be show, which is what item at category is
                                        const display = item[category]
                                        return (
                                            // Attatch price symbol if category is price and change class to be twice as wide if description, make color red if sorting
                                            <li className={`${category === 'description' ? 'col-span-2 sm:text-xs' : 'col-span-1 sm:text-xs'} ${category === sorting ? 'font-bold text-red-800' : ''}`}
                                            >{`${category === 'price' ? '$' : ''}${display}`}</li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
                {
                    //Notify that there are no search results if there are no results, aka, either search data or sorted data length <1
                    searchData.length < 1 ? (<p>{`No Search Results With ${selectedSearchKey.toUpperCase()} That Includes "${searchValue}"`}</p>) : (null)
                }
                 <p className='mb-1'>{`${sortedData ? sortedData.length : searchData.length} Items`}</p>
                <SearchBar
                    updateSearchValue={setSearchValue}
                    updateSearchKey={setSelectedSearchKey}
                />

            </div>
        </>
    )
}
export default TableComponent