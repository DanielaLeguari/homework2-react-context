import { AuthUserContext } from '../../context/AuthUserContext';
import { useContext } from 'react';
import styles from './Home.module.css';

const Home = () => {

  const { logout } = useContext(AuthUserContext);

  const logoutApp = () => {
    logout();
  }
  return (
    <main className={styles.containerHome}>
      <header className={styles.containerHeaderHome}>
        <div>
          <button
            onClick={logoutApp}>
            Sair
          </button>
        </div>
      </header>
      <body>
        Bem-vindo!
      </body>
    </main >
  );
}

export default Home;
