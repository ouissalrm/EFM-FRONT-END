import React, { useState } from "react";
export default function AjoutFilm(){
    const [donner,setdonne]=useState({
        num : "",
        titre : "",
        daten : "",
        genre :""
    });
     const [message,setmessage] =useState({ 
        num : "",
        titre : "",
        daten : "",
        genre :""});
    const afficher =()=>{
       setmessage({
        num:donner.num,
        titre : donner.titre,
        daten : donner.daten,
        genre :donner.genre

       });
    }
    const deletes =()=>{
        setmessage(
            {
                 num : "",
        titre : "",
        daten : "",
        genre :""
            }
        )
    }
    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <h2>Ajouter Un film</h2>
            <label>Num : </label>
            <input type="text" onChange={(e)=>{
                setdonne({...donner,num:e.target.value});
            }} /><br></br>
              <label>Titre : </label>
            <input type="text" onChange={(e)=>{
                setdonne({...donner,titre : e.target.value});
            }} /><br></br>
              <label>data d'édition : </label>
            <input type="date" onChange={(e)=>{
                setdonne({...donner,daten : e.target.value})
            }} /><br></br>
              <label>genre littéraire</label>
           <select onChange={(e)=>{
            setdonne({...donner,genre:e.target.value});
           }}>
            <option value={"Comédie"}>Comédie</option>
             <option value={"Tragédie"}>Tragédie</option>

            </select> <br></br>
            <button onClick={afficher}>Ajouter</button>
            <button onClick={deletes}>Réanitialiser</button>
        </form>
       <p>{message.num} </p>
        </>
    )
}