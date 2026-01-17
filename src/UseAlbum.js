import React, { useEffect, useState } from "react";
export default function UseAlbum(){
    const [album ,setAlbum ]=useState([]);
    useEffect(()=>{
        fetch('/Album.JSON')
        .then((Response)=>Response.json())
        .then((Response)=>setAlbum(Response))
    },[])
    return(
        <>
        <ul>
          {album.map((l)=>(
            <li>{l.title} </li>
          ))}</ul>
        </>
    )
}