import { useState } from 'react';
import logo from './logo.svg';
import counter from './assets/counter.png';
import timer from './assets/timer.png'
import liste from './assets/liste.png';
import form from './assets/form.png'
import './App.css';
import Counter from './composents/Counter';
import Liste from './composents/Liste';
import Timer from './composents/Timer';
import Form from './composents/Form';
import ButtonToggle from './composents/ButtonToggle';

function App() {

  const [showExercises, setShowExercises] = useState(false);

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
        <div style={{display:'flex', margin:20, justifyContent:'space-evenly',alignItems:'center', minWidth:'50%'}} >
          <a href='https://react.dev/' ><button className='btnheader'>EN SAVOIR PLUS</button></a>
          <button className='btnheader' onClick={() => setShowExercises(!showExercises)}>
            {showExercises ? 'CACHER LES EXERCICES' : 'AFFICHER LES EXERCICES'}
          </button>
        </div>
      </header>

{/* ************************************PARTIE 1***************************** */}
    {showExercises && (
      <>
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>

            <h2>** Exercice 1 : Utilisation de useEffect avec un compteur **</h2>
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
            <div style={{ display: 'flex', justifyContent: 'center', minHeight: 500}}>
              <div style={{ width: '50%', margin:20}} >
                  <h3>Consigne:</h3>
                  <p className='border'>
                    Créez un composant React qui affiche un compteur initialisé à zéro. 
                    Utilisez useEffect pour mettre à jour le titre de la page avec la 
                    valeur actuelle du compteur chaque fois que le compteur change.
                  </p>
              </div>
              <div  style={{ width: '40%', margin:20  }} >
                <h3>Résultat attendu</h3>
                <Counter/>
              </div>
              
            </div>      
             <ButtonToggle
              title="Réponse exercice 1"
              content={
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div  style={{ width: '50%', margin:20  }}>
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
              }
             />
          
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
      {/* ************************************PARTIE 2***************************** */}
      
            <h2>** Exercice 2 : Chargement de données depuis une API **</h2>
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
            <div style={{ display: 'flex', justifyContent: 'center',minHeight: 500}}>
              <div style={{ width: '50%', margin:20}} >
                <h3>Consigne:</h3>
                <p className='border'>
                  Créez un composant React qui affiche une liste de produits provenant 
                  d'une API fictive. Utilisez useEffect pour charger les données depuis 
                  l'API lorsque le composant est monté et affichez-les dans le composant.
                </p>
              </div>
              <div  style={{ width: '40%', margin:20  }} >
                <h3>Résultat attendu</h3>
                <Liste/>
              </div>
            </div>
            <ButtonToggle
              title="Réponse exercice 2"
              content={
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <div  style={{ width: '60%', margin:20  }}>
                    <h4>Structure du code</h4>
                    <img src={liste} alt='counter' />
                  </div>   
                  <div  style={{ width: '30%', margin:20  }}>
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
                  </div>
                </div>
              }
            />
      
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
      {/* ************************************PARTIE 3***************************** */}
      
            <h2>** Exercice 3 : Gestion d'une minuterie avec useEffect **</h2>
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
            <div style={{ display: 'flex', justifyContent: 'center',minHeight: 500}}>
              <div style={{ width: '50%', margin:20}} >
                <h3>Consigne:</h3>
                <p className='border'>
                  Créez un composant React qui affiche une minuterie. Utilisez useEffect pour démarrer une minuterie
                  lorsque le composant est monté. La minuterie doit être mise à jour toutes les secondes,
                  et le composant doit afficher le temps écoulé.
                </p>
              </div>
              <div  style={{ width: '40%', margin:20  }} >
                <h3>Résultat attendu</h3>
                <Timer/>
              </div>
            </div>
            <ButtonToggle
              title="Réponse exercie 3"
              content={
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <div  style={{ width: '65%', margin:20  }}>
                    <h4>Structure du code</h4>
                    <img src={timer} alt='counter' />
                  </div>
                  <div  style={{ width: '30%', margin:20  }}>
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
                  </div>
                </div>
              }
            />    
                
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
            {/* ************************************PARTIE 4***************************** */}
      
            <h2>** Exercice 4 : Utilisation de useEffect avec un formulaire **</h2>
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
      
            <div style={{ display: 'flex', justifyContent: 'center',minHeight: 500}}>
              <div style={{ width: '50%', margin:20}} >
                <h3>Consigne:</h3>
                <p className='border'>
                Créez un formulaire de connexion simple avec des champs pour le nom d'utilisateur et le mot de passe. 
                Utilisez useEffect pour vérifier si les champs du formulaire sont valides à chaque changement, 
                puis affichez un message d'erreur si nécessaire.
                </p>
              </div>
              <div  style={{ width: '40%', margin:20  }} >
                <h3>Résultat attendu</h3>
                <Form/>
              </div>
            </div>
            <ButtonToggle
              title="Réponse exercie 4"
              content={
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <div  style={{ width: '50%', margin:20  }}>
                    <h4>Structure du code</h4>
                    <img src={form} alt='counter' />
                  </div>
                  <div  style={{ width: '40%', margin:20  }}>
                    <h4>Explications</h4>
                    <p className='border'>
                      Tout d'abord, j'importe useEffect et useState depuis React pour me permettre de gérer l'état 
                      de mon formulaire et d'effectuer des effets secondaires lorsque cela est nécessaire.
                      Dans mon composant Form, j'utilise le hook useState pour déclarer trois états : username, login et error.
                      Ces états me permettent de suivre la valeur des champs de saisie du nom d'utilisateur et du login,
                      ainsi que de stocker d'éventuels messages d'erreur.
                      J'utilise également le hook useEffect pour effectuer des validations en temps réel à chaque fois que 
                      les valeurs de username ou de login changent. Ces validations incluent la vérification si les champs 
                      sont vides, si leur longueur minimale est respectée, ainsi que si le champ login contient au moins 
                      une majuscule et un chiffre. Si l'une de ces validations échoue, je stocke le message d'erreur approprié
                      dans l'état error.
                      Lorsque je soumets le formulaire en appuyant sur le bouton "Se Connecter", la fonction handleSubmit est appelée.
                      Cette fonction empêche la soumission par défaut du formulaire en utilisant e.preventDefault(), 
                      puis elle affiche une alerte contenant les valeurs actuelles de username et de login. 
                      Enfin, elle réinitialise les états username et login en les mettant à une chaîne vide.
                      Pour ce qui est du rendu de mon composant Form, il se compose d'un formulaire contenant 
                      deux champs d'entrée, l'un pour username et l'autre pour login. J'ai également inclus un bouton de soumission
                       Le texte affiché sur ce bouton change en fonction de l'état error : s'il y a une erreur, il affiche un message barré,
                       sinon il affiche simplement "Se Connecter". Si une erreur est présente, le message d'erreur est également affiché en rouge.
                    </p>
                  </div>
                </div>
              }
            />
      
            <p style={{backgroundColor:'#61dafb', height: 15}}></p>
            <p style={{backgroundColor:'#282c34', height: 150}}></p>
      </>
    )}
    </div>
  );
}


export default App;
