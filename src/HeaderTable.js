import React from "react";
import Etudiant from "./Etudiant";
import ListeEtudiants from "./ListeEtudiants ";
export default function HeaderTable(){
    return(
         <>
         <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Moyenne</th>
                </tr>
            </thead>
            <tbody>
                <ListeEtudiants />
            </tbody>
         </table>


        </>
    )
}