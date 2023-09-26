import { useState } from 'react';
import logo from './logo.svg';
import counter from './assets/counter.png';
import timer from './assets/timer.png'
import liste from './assets/liste.png';
import './App.css';
import Counter from './composents/Counter';
import Liste from './composents/Liste';
import Timer from './composents/Timer';
import Form from './composents/Form';
import ToggleBlock from './composents/ToggleBlock'
function App() {

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Exercices pour apprendre à utiliser les hooks useState/useEffect
        </h2>
        <p className='sousTitre'>
        Les hooks useState et useEffect sont deux fonctionnalités fondamentales 
        de React qui permettent de gérer l'état et les effets secondaires dans les composants.
        </p>
      </header>

      <h3>**Exercice 1 : Utilisation de useEffect avec un compteur**</h3>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={{ width: '30%', margin:20}} >
            <p>Consigne:</p>
            <p className='border'>
              Créez un composant React qui affiche un compteur initialisé à zéro. 
              Utilisez useEffect pour mettre à jour le titre de la page avec la 
              valeur actuelle du compteur chaque fois que le compteur change.
            </p>
        </div>
        <div  style={{ width: '30%', margin:20  }} >
          <p>Resultat attendu</p>
          <Counter/>
        </div>
        
      </div>
      <button onClick={toggleDetails}>Afficher/Masquer réponse</button>
      {showDetails && (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div  style={{ width: '30%', margin:20  }}>
          <h4>Structure du code</h4>
            <img src={counter} alt='counter' />
          </div>
          <div  style={{ width: '30%', margin:20  }}>
            <h4>Explications</h4>
              <p className='border'>Dans ce composant React, j'utilise le hook useState pour gérer l'état du compteur (count). 
                Ensuite, j'utilise le hook useEffect pour mettre à jour le titre de la page chaque fois 
                que la valeur de count change. L'effet nettoie également le titre de la page lorsque le composant est démonté.
                J'importe bien sûr useState et useEffect depuis React pour que ce code fonctionne correctement.
                Lorsque j'utilise ce composant, je constate que le titre de la page est mis à jour automatiquement 
                chaque fois que je clique sur le bouton "Incrémenter" pour modifier la valeur du compteur. 
                Cela permet d'illustrer comment useEffect peut être utilisé pour effectuer des actions en réaction 
                aux changements d'état dans un composant React, dans ce cas précis, en mettant à jour le titre 
                de la page en fonction de la valeur du compteur.
              </p>
          </div>
        </div>
      )}
       <ToggleBlock
        title="Resultat attendu"
        content={<Counter />}
      />
      

      <p>---------------------------------------------------------</p>

      <h3>**Exercice 2 : Chargement de données depuis une API**</h3>

      <p>Créez un composant React qui affiche une liste de produits provenant 
        d'une API fictive. Utilisez useEffect pour charger les données depuis 
        l'API lorsque le composant est monté et affichez-les dans le composant.
      </p>
      <Liste/>
      <h4>Structure du code</h4>
      <img src={liste} alt='counter' />
      <h4>Explications</h4>
      <p className='border'>
         J'ai utilisé le hook useState pour gérer l'état des produits (products) 
         et un état de chargement (loading). J'ai également utilisé le hook useEffect 
         pour charger les données depuis une API fictive lorsque le composant est monté.
         La fonction fetchData est responsable de la récupération des données depuis l'API. 
         Une fois que les données sont chargées avec succès, je les ai stockées dans l'état 
         products et définies loading sur false.
         J'ai ajouté la ligne const limitedProducts = products.slice(0, 5); 
         pour extraire les 5 premiers produits du tableau products.Cela limitera le nombre de produits 
         affichés à 5 dans votre composant. Les autres produits, s'ils existent, ne seront pas affichés.
         J'ai veillé à importer useState et useEffect depuis React pour que ce code fonctionne 
         correctement. Nous pouvons remplacer l'URL de l'API par une URL réelle si nous avons une API à utiliser.
      </p>
      <p>---------------------------------------------------------</p>

      <h3>**Exercice 3 : Gestion d'une minuterie avec useEffect**</h3>
      <p>
      Créez un composant React qui affiche une minuterie. Utilisez useEffect pour démarrer une minuterie
      lorsque le composant est monté. La minuterie doit être mise à jour toutes les secondes,
      et le composant doit afficher le temps écoulé.
      </p>
      <Timer/>
      <h4>Structure du code</h4>
      <img src={timer} alt='counter' />
      <h4>Explications</h4>
      <p className='border'>
        Dans ce composant React, j'utilise le hook useState pour gérer l'état des secondes (seconds). 
        Ensuite, j'utilise le hook useEffect pour démarrer une minuterie en utilisant setInterval, 
        qui incrémente les secondes de 1 à chaque intervalle de 1000 ms (1 seconde).
        Le retour de ma fonction de nettoyage clearInterval(interval) permet d'arrêter la minuterie 
        lorsque le composant est démonté(rafraîchissement de la page), évitant ainsi les fuites de mémoire.
        Lorsque j'utilise ce composant, je vois une minuterie en cours d'exécution qui met à jour 
        les secondes toutes les secondes, affichant le temps écoulé. J'ai également ajouté un bouton 
        avec le texte "Remettre à zéro" et un gestionnaire d'événements onClick qui appelle ma fonction resetTimer. 
        Cette fonction réinitialise la valeur de seconds à zéro lorsque le bouton est cliqué, remettant ainsi le compteur à zéro.
      </p>
      <p>---------------------------------------------------------</p>
      <Form/>
    </div>
  );
}


export default App;
