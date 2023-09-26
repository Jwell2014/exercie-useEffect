import React, { useState, useEffect } from 'react';
import '../App.css';


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Mettre à jour le titre de la page avec la valeur du compteur
    document.title = `Compteur : ${count}`;
  }, [count]); // useEffect sera déclenché chaque fois que 'count' change

  return (
    <div className="counter">
      <h1>Compteur</h1>
      <p>Valeur du compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>

    </div>
  );
}

export default Counter;
