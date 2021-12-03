import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


export default function CountryDetails() {

     const {id} = useParams()
     const [detail, setDetail] = useState(null)

     useEffect(()=> {

          async function getData(){
            let response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
            const {data} = response
            let country = {
              id: id,
              flags: data[0].flags,
              capital: data[0].capital,
              borders: data[0].borders,
              name: data[0].name.common,
              area: data[0].area,
            }
            setDetail(country)
            
            console.log(id)
          }
          getData()
      
      
        }, [id])

     if (!detail){
     return <img src="https://c.tenor.com/YAOhbZ5GZy4AAAAC/nazar%C3%A9.gif" alt="loading"   />
     }
        


  return (
    <div>
      <h1> country details </h1>
       <img src={detail.flags.png} alt="" /> 
      <h1> Capital: {detail.capital}</h1>

      <ul> Area: {detail.area} km</ul>     

      <ul> Boarder:           
          {detail.borders.map((elem)=> {
          return (
          <ul> 
           {/* <Link to={`/${elem}`} >{elem}</Link>  */}
          </ul>
          );
     })}
     </ul>
    </div>
  )
}
