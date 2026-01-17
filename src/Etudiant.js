import React from "react";
export default function Etudiant({etudiants}){
    const moyenne =etudiants.notes.reduce((a,b)=>a+b,0)
    return(
       <tr>
            <td>{etudiants.nom}</td>
            <td>{etudiants.prenom}</td>
            <td> {moyenne} </td>
           
        </tr>
    )
}