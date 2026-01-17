import React, { useEffect, useState } from "react";
export default function Countryy(){
    const [country , Setcountry] = useState([]);
    useEffect(()=>{
        fetch('/Country.JSON')
        .then((Response=>Response.json()))
        .then((Response=>Setcountry(Response)))
    },[])
    return(
        <div>
      
        <ul>
        {country.map((c,index)=>(
            <li key={index}>
             {c.country} ----------------- {c.cases}
            </li>
        ))}
        </ul>
      
        </div>
    )
}