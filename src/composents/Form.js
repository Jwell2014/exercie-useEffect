import React, { useEffect, useState } from 'react';

function Form(){

    const [username, setUsername] = useState("");
    const [login, setLogin] = useState("");
    const [error, setError] = useState("");
 
    useEffect(() => {
        // Fonction de validation des champs
        const validateFields = () => {
          if (username.trim() === '' || login.trim() === '') {
            setError('Les champs ne doivent pas être vides.');
          } else {
            setError('');
          }
        };
    
        validateFields(); // Appeler la fonction de validation à chaque changement
    
      }, [username, login]); // Le tableau de dépendances inclut 'username' et 'password'
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire (non implémenté dans cet exemple)
        console.log(username,login)
        alert(`Nom : ${username} \n Login : ${login}`)
        setLogin("")
        setUsername("")
      };

    return (
        <div className="fond">
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Nom</label>
                    <input 
                        type='text'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    ></input>
                </div>
               
                <div>
                    <label>Login</label>
                    <input
                        type='text'
                        value={login}
                        onChange={(e)=>setLogin(e.target.value)}
                    ></input>
                </div>
                {error ? (
                <>    
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{textDecorationLine:"line-through"}} >Se Connecter</p>
                </>
                ) : (
                <button type="submit">Se Connecter</button>
                )}
                
            </form>
        </div>
    );
};

export default Form;