import React from "react";
export default function Produit({produitt}){
    return(
       <div>
        <div>
       
        <img style={{width:"200px"}} src={produitt.thumbnail} alt="imagedepc" />
        <h3> {produitt.title} </h3>
        <strong>{produitt.price} </strong><br></br>
        <button>Ajouter Au Panier</button>
       </div>
       </div>
    )
}