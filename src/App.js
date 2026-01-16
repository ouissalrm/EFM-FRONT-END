import logo from './logo.svg';
import './App.css';
import AjoutLivre from './AjoutLivre';
import Produits from './Produits';
import Formul from './Formu';

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
    </div>
  );
}

export default App;
