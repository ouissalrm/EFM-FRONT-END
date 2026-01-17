import React, { useEffect, useState } from "react";
export default function UseDetailAlbum(){
 const [number, setnumber] =useState("");
 const [album,setAlbum]=useState([]);
  useEffect(()=>{
         fetch('/Album.JSON')
         .then((Response)=>Response.json())
         .then((Response)=>setAlbum(Response))
     },[])
     const recherch = album.find((al)=>al.id === Number(number))
    return(
        <>
        <h4>Donnez l'id de l'album (entre 1 et 100)</h4>
        <input  type="text" placeholder="Enter your Number"
        onChange={(e)=>{
            setnumber(e.target.value)
        }} />
        <p> Vous avez choisi l'id: {number} </p>
        <p>Le titre de l'album cherché est :

                 {recherch? recherch.title : "Not found"}


        </p>
        </>
    )
}