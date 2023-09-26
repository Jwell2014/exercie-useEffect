import React, { useState, useEffect } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Mettre à jour le titre de la page avec la valeur du compteur
    document.title = `Compteur : ${count}`;
     // Cette fonction sera exécutée lorsque le composant sera démonté
     return () => {
      document.title = 'Application React'; // Rétablir le titre de la page
    };
  }, [count]); // useEffect sera déclenché chaque fois que 'count' change

  return (
    <div className="fond">
      <h1>Compteur</h1>
      <h2>Valeur du compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>

    </div>
  );
}

export default Counter;
