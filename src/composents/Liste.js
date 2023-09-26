import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction de chargement des données depuis une API fictive (simulée ici)
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Appel de la fonction pour charger les données lorsque le composant est monté
  }, []); // Le tableau de dépendances est vide, cela signifie que l'effet ne dépend d'aucune valeur

  // Limiter le nombre de produits affichés à, par exemple, 5 produits
  const limitedProducts = products.slice(0, 5);

  return (
    <div className="fond">
      <h1>Liste des Produits</h1>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {limitedProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
