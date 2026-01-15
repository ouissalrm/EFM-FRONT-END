import React, { useState } from "react";
export default function AjoutLivre(){
    const [name,setNmae]=useState("");
    const [Titre,setTitre]=useState("");
    const [Date,setDate]=useState("");
    const [Prix,setPrix]=useState("");
    const [genre, setGenre] = useState("");
    const [livre ,setlivre] =useState([]);

    const check=()=>{
        // alert("hey")
        if(name==="" || Titre==="" || Date==="" || Prix==="" || genre === ""){
            alert("les champs sont obligatoire");
            return;
        }
        
        alert("Ajouter")
        const Nvlivre ={
            name,
            Titre,
            Date,
            Prix,
            genre
        }
        setlivre([...livre,Nvlivre]);
    }


    return(
        <div>
            <h1>Ajouter Un livre  </h1>
            <form onSubmit={(e)=>{e.preventDefault();}}>
                <div className="Nom">
                    <label>Num:</label>
                    <input type="text" onChange={(e)=>{
                        setNmae(e.target.value);
                    }} />

                </div> <div className="Titre">
                    <label>Titre:</label>
                    <input type="tel" onChange={(e)=>{
                        setTitre(e.target.value)
                    }} />
                </div>

                <div className="Date">
                    <label>Date d'édition:</label>
                    <input type="date" onChange={(e)=>{
                        setDate(e.target.value)
                    }} />
                </div>


                 <div className="Genre">
                    <label>Genre littéraire:</label>
                    <select value={genre} onChange={(e)=>{
                        setGenre(e.target.value);
                    }}>
                          <option value="">-- Choisir un genre --</option>
                        <option value="Tragédie">Tragédie</option>
                        <option value="Comédie">Comédie</option>
                    </select>
                </div>

                 <div className="Prix">
                    <label>Prix:</label>
                    <input type="text" onChange={(e)=>{
                        setPrix(e.target.value)
                    }} />
                </div>

           <button onClick={check}>Ajouter</button>
           <button>Réinitialiser</button>
             <div>
  {livre.map((li, index) => (
    <p key={index}> Num: {li.name} | Titre :{li.Titre}  | Date édition : {li.Date} Genre : {li.genre} | Prix: {li.Prix} </p>
  ))}
</div>

        
            </form>
        </div>
    )
}