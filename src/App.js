import logo from './logo.svg';
import './App.css';
import Counter from './composents/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Exercices pour apprendre a utiliser le hook useEffect
        </p>
      </header>
      <h3>**Exercice 1 : Utilisation de useEffect avec un compteur**</h3>
        <p>
          Créez un composant React qui affiche un compteur initialisé à zéro. 
          Utilisez useEffect pour mettre à jour le titre de la page avec la 
          valeur actuelle du compteur chaque fois que le compteur change.
        </p>
      <Counter />
    </div>
  );
}


export default App;
