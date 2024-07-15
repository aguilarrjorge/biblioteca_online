import React, { useState } from 'react'
import '../styles/buscador.css'

export default function Buscador() {

    const [text, setText] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const people = [5, 12, 8, 130, 44];

    function search(e){
        setText(e.target.value,)
        const searchResults = people.filter((element) => element == text);
        console.log("entre search"+ e.target.value)
        console.log(searchResults)
        if (searchResults != undefined) {
            console.log("lo encontre"+ searchResults)
        }
    }

    React.useEffect(() => {
        const results = people.filter((person) =>
          person == text
        );
        setSearchResults(results);
      }, [text]);
  return (
    <div className='Main'>
        

    <input className='main--modifier' type="search" placeholder="Libros Disponibles para alquilar" onChange={search}/> 
        {
            text  
        }

        <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
        </ul>

    </div>
  )
}
