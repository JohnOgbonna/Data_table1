export interface Data {
    "id": number,
    "name": string,
    "quantity": number,
    "category": string,
    "price": number,
    "description": string
}
export type SortDirection = 'asc' | 'desc';

export const tableDataTypes: string[] = ["id", "name", "quantity", "category", "price", "description"] //to map the first row with column names

export const sortDirectionOptions = {
    'asc': 'Increasing',
    'desc': 'Decreasing'
}