import logo from './logo.svg';
import './App.css';
import AjoutLivre from './AjoutLivre';
import Produits from './Produits';

function App() {
  return (
    <div className="App">
      <AjoutLivre />
      <hr></hr>
      <Produits />
    </div>
  );
}

export default App;
