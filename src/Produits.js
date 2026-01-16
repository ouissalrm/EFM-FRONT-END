import React, { useState } from "react";
import Produit from "./Produit";
import pcGamer from "./img/71Mxnrf5j3L.jpg";
import acer from "./img/matebook-d-14-2024-13th-gen-core.jpg";
import huawi from './img/815uX7wkOZS._AC_UF894,1000_QL80_.jpg'

export default function Produits(){
     const [produits , setproduit]= useState(
        [
  {
    id: 2,
    title: "PC Portable Gamer",
    price: "2190 DH",
    "thumbnail": pcGamer
  },
  {
    id: 3,
    title: "PC Portable Chromebook Acer",
    price: "3640 DH",
    thumbnail: acer
  },
  {
    id: 4,
    title: "PC Portable - HUAWEI",
    price: "1270 DH",
    thumbnail: huawi
  }
]

     )
    return(
        <>
        <div style={{ display: "flex", gap: "90px", marginLeft:"10px"}}>
         {produits.map((p)=>(
            <Produit key={p.id} produitt={p} />
         ))}</div>

        </>
    )
}