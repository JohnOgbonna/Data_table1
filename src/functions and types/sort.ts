import { Data } from "./typesAndInterfaces";

type SortDirection = 'asc' | 'desc';

export function sortByKey(data: Data[], key: keyof Data, direction: SortDirection = 'asc'): Data[] {
  return data.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      //sort according to whether or not ascending or descending
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    } else if (typeof valueA === 'string' && typeof valueB === 'string') {
      return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      return 0; // Default case if the types are not supported
    }
  });
}