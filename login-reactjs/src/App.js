import React, { useState, useEffect } from 'react';

function App() {
    const [clients, setClient] = useState([]);
 // const [senha, setSenha] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/login')
    .then((response) => response.json())
    .then((data) => {
      setClient(data)
   //  setClient(data[0].email)
   //  setSenha(data[0].senha)
    })
    .catch((error) => {
      console.error('Erro ao buscar os dados', error);  
    });
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
    if (!username || !password) {
      setError('Nome de usuário e senha são obrigatórios.');
    }
    if(clients[0].email === username && clients[0].senha === password) {
      setLoggedIn(true)
    } else {
      setError('Email ou senha errados')
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {loggedIn ? (
        <p>Você está logado com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div>
            <label>Nome de Usuário:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
}
export default App;