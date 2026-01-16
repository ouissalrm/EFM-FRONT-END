import React, { useState } from "react";
export default function Formul(){
    const [dataa,setDataa]=useState({
        CIN:"",
        Nom :"",
        prenom : "",
        dataNaissance :""
    })

   const confirmation =()=>{
     if(dataa.CIN ==="" || dataa.Nom ==="" || dataa.prenom ==="" || dataa.dataNaissance ===""){
        alert("toutes les champs sont obligatoire")
    }
    else{
        alert(`Bienvenue ${dataa.Nom} Merci pour
votre inscription
`)
    }
   }
    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }} style={{border:"2px solid black" }}> 
            <label>CIN :</label>
            <input type="text" onChange={(e)=>{
                setDataa({...dataa,CIN:e.target.value})
            }} /><br></br>
            <label>Nom : </label>
            <input type="text" onChange={(e)=>{
                setDataa({...dataa,Nom:e.target.value})
            }} /><br></br>
            <label>Prenom :</label>
            <input type="text" onChange={(e)=>{
                setDataa({...dataa,prenom:e.target.value})
            }} /><br></br>
            <label>Date Naissance</label>
            <input type="text" onChange={(e)=>{
                setDataa({...dataa,dataNaissance:e.target.value})
            }} /><br></br>
            <button onClick={confirmation}>Envoyer</button>

        </form>
        </>
    )
}