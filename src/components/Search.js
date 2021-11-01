import React from 'react';
import "./../styles/components/search.scss";
import {useState} from 'react'

function Search() {

    const [data, setData] = useState([]);

    const handleSearchTerm =async(e) => {
        let value = e.target.value;
        if (value) {
            

            await fetch(`https://e636-176-162-49-41.ngrok.io/products?title_contains=${value}`)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
        }
        else {
            setData([])
        }
        
    };
    console.log(data)
    
    return (
     <div className="searchBar">
         <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher" onChange={handleSearchTerm}/>
         <div className="search__results">
             {data.map((val) => {
             return (
             <div className="search_result" key={val.id}>
                 {val.title}
                 </div>
             );
             })}
         </div>
     </div>
    )
}
export default Search