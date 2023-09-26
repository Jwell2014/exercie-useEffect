import logo from './logo.svg';
import './App.css';
import Counter from './composents/Counter';
import Liste from './composents/Liste';

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
      <h4>Explications</h4>
      <p>Dans ce composant React, j'utilise le hook useState pour gérer l'état du compteur (count). 
        Ensuite, j'utilise le hook useEffect pour mettre à jour le titre de la page chaque fois 
        que la valeur de count change. L'effet nettoie également le titre de la page lorsque le composant est démonté.
        J'importe bien sûr useState et useEffect depuis React pour que ce code fonctionne correctement.
        Lorsque j'utilise ce composant, je constate que le titre de la page est mis à jour automatiquement 
        chaque fois que je clique sur le bouton "Incrémenter" pour modifier la valeur du compteur. 
        Cela permet d'illustrer comment useEffect peut être utilisé pour effectuer des actions en réaction 
        aux changements d'état dans un composant React, dans ce cas précis, en mettant à jour le titre 
        de la page en fonction de la valeur du compteur.
      </p>
      <p>---------------------------------------------------------</p>
      <h3>**Exercice 2 : Chargement de données depuis une API**</h3>

      <p>Créez un composant React qui affiche une liste de produits provenant 
        d'une API fictive. Utilisez useEffect pour charger les données depuis 
        l'API lorsque le composant est monté et affichez-les dans le composant.
      </p>
      <Liste/>
      <h4>Explications</h4>
      <p>
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
         correctement. Nous pouvons remplacer l'URL de l'API par une URL réelle si nous avons une API à utiliser."
      </p>
      <p>---------------------------------------------------------</p>

    </div>
  );
}


export default App;
