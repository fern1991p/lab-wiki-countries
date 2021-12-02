import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import React from "react" 


export default function CountriesList() {

const [countries, setCountries] = useState([])

     useEffect(() => {

          async function getData(){
          let response = await axios.get('https://restcountries.com/v3.1/all')
          setCountries(response.data)
          //done
               
          }

          getData()
          
     }, [])

     
    if (!countries.length) {
     return <img src="https://c.tenor.com/YAOhbZ5GZy4AAAAC/nazar%C3%A9.gif" alt="loading"   />
    }

    return (
        <div>
            <h1>List of Countries</h1>
            {
                countries.map((elem, i ) => {
                    return (
                        <div>
                              <img src={elem.flags.png} alt="" />
                              <Link to={`/${elem.cca3}`} >{elem.name.official}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}
