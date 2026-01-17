import logo from './logo.svg';
import './App.css';
import AjoutLivre from './AjoutLivre';
import Produits from './Produits';
import Formul from './Formu';
import Countryy from './Countryy';
import UseAlbum from './UseAlbum';
import UseDetailAlbum from './UseDetailAlbum';
import SelectAlbum from './SelectAlbum';

function App() {
  return (
    <div className="App">
           <h5>Reg 1 Exercice 1 </h5>
      <AjoutLivre />
      <hr></hr>
           <h5>Reg 1 Exercice 2 </h5>
      <Produits />
      <hr></hr>
      <h5>Reg 2 Exercice 1 </h5>
      <Formul />
      <hr></hr>
       <h5>Reg 1 Exercice 3 </h5>
       <Countryy />
        <h5>Reg 2 Exercice 2 partie 1 </h5>
        <UseAlbum />
        <h5>Reg 2 Exercice 2 partie 2 </h5>
        <UseDetailAlbum />
        <h5>Reg 2 Exercice 2 partie 3 </h5>
        <SelectAlbum />
        
        

    </div>
  );
}

export default App;
