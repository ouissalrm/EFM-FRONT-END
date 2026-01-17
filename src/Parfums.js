import React, { useEffect, useState } from "react";
import chanel from "./img/téléchargement (20).jfif";
import maison from "./img/Maison Francis Kurkdjian Paris _ Baccarat Rouge 540 Extrait de parfum.jfif";
import aic from './img/YSL Y Eau De Parfum For Men 100ml.jfif'

export default function Parfums(){
    const [parfums, setparfums]=useState([]);
    const imagee=[chanel,maison,aic];
    
    useEffect(()=>{

        fetch('/Produit.JSON')
        .then((Response)=>Response.json())
        .then((Response)=>setparfums(Response))
    },[]);

    return(
        <>

         {parfums.map((p,index)=>(
           <div>
           <img style={{width:"200px"}} src={imagee[index]} />
           <p> ID de cette photo : {p.id} </p>
           <h4> titre : {p.titre} </h4>
           <strong> prix : {p.prix} </strong>

           </div>

            
         ))}
        </>
    )
}