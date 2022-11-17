import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
import { useForm } from "react-hook-form";
import { IUserLogin } from '../../utils/interface';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthUserContext);
  //form
  const { register, handleSubmit } = useForm<IUserLogin>();

  const doLogin = async (data: IUserLogin) => {
    await login(data);
  }


  return (
    <main>
      <div className={styles.containerFormLogin}>
        <form className={styles.formLogin} onSubmit={handleSubmit(doLogin)}>
          <label htmlFor="login">Login</label>
          <input type="text" required id="login" {...register("login")} />

          <label htmlFor="senha">Senha</label>
          <input type="password" required id="senha" {...register("senha")} />
          <div className={styles.containerAcoes}>
            <input className={styles.btnEntrar} type="submit" value="Entrar" />
          </div>
          <div>
            <Link style={{ textDecoration: "none", color: "var(--cor-fonte-login)" }} to={"/sign-up"}>Cadastre-se aqui!</Link>
          </div>
        </form>
      </div>
      <div className={styles.containerPageLogin}>
        <div className={styles.containerImagem}>
          <img className={styles.imagemLogin} src="./assets/login.jpg" alt="imagem login" />
        </div></div>
    </main>
  );
}

export default Login;
