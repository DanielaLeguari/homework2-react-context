import React from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
import { useContext } from 'react';

const Home = () => {

  const { logout } = useContext(AuthUserContext);

  const logoutApp = () => {
    logout();
  }
  return (
    <div>
      <button onClick={logoutApp}>Sair</button>
    </div>
  );
}

export default Home;
