import React, { useEffect, useState } from 'react';

function Form() {
  // Déclaration des états avec useState
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");

  // Utilisation de useEffect pour effectuer des validations en temps réel
  useEffect(() => {
    // Fonction de validation des champs
    if (username.trim() === '' || login.trim() === '') {
      setError('Les champs ne doivent pas être vides.');
    } else if (username.length < 4) {
      setError('Le champ nom ne doit pas être inférieur à 4 caractères.');
    } else if (login.length < 8) {
      setError('Le champ login ne doit pas être inférieur à 8 caractères.');
    } else if (!/[A-Z]/.test(login)) {
      setError('Le champ login doit contenir au moins une majuscule.');
    } else if (!/\d/.test(login)) {
      setError('Le champ login doit contenir au moins un chiffre.');
    } else {
      setError('');
    }
  }, [username, login]); // Le tableau de dépendances inclut 'username' et 'login'

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire (non implémenté dans cet exemple)
    console.log(username, login);
    alert(`Nom : ${username} \n Login : ${login}`);
    setLogin("");
    setUsername("");
  };

  return (
    <div className="fond">
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <label style={{margin:10}}>Nom</label>
          <input 
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <label style={{margin:10}}>Login</label>
          <input
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></input>
        </div>
        {error ? (
          <>    
            <p style={{ color: 'red' }}>{error}</p>
            <p style={{ textDecorationLine: "line-through" }}>Se Connecter</p>
          </>
        ) : (
          <button className='btnvalid' style={{marginTop:40}} type="submit">Se Connecter</button>
        )}
      </form>
    </div>
  );
}

export default Form;