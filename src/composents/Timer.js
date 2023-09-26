import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mettre à jour les secondes à chaque intervalle de 1000 ms (1 seconde)
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Fonction de nettoyage pour arrêter la minuterie lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau de dépendances est vide, cela signifie que l'effet ne dépend d'aucune valeur

  const resetTimer = () => {
    setSeconds(0); // Remettre le compteur à zéro
  };

  return (
    <div className="fond">
      <h1>Minuterie</h1>
      <p>Temps écoulé : {seconds} secondes</p>
      <button onClick={resetTimer}>Remettre à zéro</button>
    </div>
  );
}

export default Timer;
