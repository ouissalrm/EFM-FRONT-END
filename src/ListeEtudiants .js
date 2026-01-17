import React, { useEffect, useState } from "react";
import Etudiant from "./Etudiant";
export default function ListeEtudiants (){
    const [etudiants ,setetudiants] =useState([]);
    useEffect(()=>{
        fetch('/Etudiant.JSON')
        .then((Response)=>Response.json())
        .then((Response)=>setetudiants(Response))

    },[])
    return(
        <>
        {etudiants.map((e)=>(
            <Etudiant etudiants={e} />
        ))}
        </>
    )
}