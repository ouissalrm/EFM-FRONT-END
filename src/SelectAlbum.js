import React, { useEffect, useState } from "react";
export default function SelectAlbum(){
     const [album ,setAlbum ]=useState([]);
     const [selectt,setselect]=useState("");
        useEffect(()=>{
            fetch('/Album.JSON')
            .then((Response)=>Response.json())
            .then((Response)=>setAlbum(Response))
        },[])
    return(
        <>

        <h3>Selectionner votre Album</h3>
        <select onChange={(e)=>{
      setselect(e.target.value)
        }}>
             <option value="">-- Choisir un album --</option>
            {album.map((al)=>(
                <option value={al.id} >{al.title} </option>
            ))}
        </select>
        <p> Vous avez choisi l'id : {selectt} </p>
       


        </>
    )
}