This app was initialized with Vite and typescript, as opposed to Create React App, for faster and light weight set up
The purpose of this app is to display the sample JSON data in a front end table format and allow sorting and searching.
If you are running this app locally, navigate to the root folder, run: npm install npm run dev, this will start the server locally. Open in browser and you can use the app
If you dont want to bother with setting it up, this app is deployed on : https://data-tables-m.web.app

-The data is displayed in a table. Tailwind css was used to do the styling, as it made it easier to make sute the table was properly lined up

-By default, the data will appear sorted by ID increasing, as it does in the JSON data table. 

-This app allows both sorting and searching (filtering) by ANY column simultaneously. By clicking on the column headers, (ID, NAME, PRICE etc), it will use that as the key to sort. Clicking on the same header again will change if it will be sorting increasin or decreasing. Sort direction can also be changed by clicking the header Where it says "Sorting By: Key Order: sortDirection"

-When sorting, an increasing order for number value keys (ID and price) means that it sorts from the highest number to the lowest, and vice versa for decreasing. 

-For string value keys, an increasing order means alphabetical order and reverse alphabetical order for decreasing order. 

-Data can be searched. The dropdown allows you to pick what key to search by and the relevant results will be shown below dynamically

-Individual or all columns can be searched, by selecting the appropriate option in the dropdown

-Both the search and the filter functions are done using a custom hook, these can be found in the hook folder. This allowed the component code to be simplified and removed the need for a use effect in the parent Table Component, as the custom hooks now take care of updating the return values in the table. 

-When data is searched, it can also be sorted.

-Headers and values in the sort key column will appear red and the header will be underlined

-I considered grouping some states together into objects, like sorting and setSortingKey, but having them as individuals made it a bit easier to follow