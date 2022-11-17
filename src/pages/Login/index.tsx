import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
import { useForm } from "react-hook-form";
import { IUserLogin } from '../../utils/interface';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(AuthUserContext);
  //form
  const { register, handleSubmit} = useForm<IUserLogin>();

  const doLogin = async (data: IUserLogin) => {
    await login(data);
  }


  return (
    <main className={styles.containerFormLogin}>
    <form className={styles.formLogin} onSubmit={handleSubmit(doLogin)}>
      <label htmlFor="login">Login</label>
      <input type="text" required id="login" {...register("login")} />

      <label htmlFor="senha">Senha</label>
      <input type="text" required id="senha" {...register("senha")} />

      <input type="submit" value="Entrar" />
    </form>
    </main>
  );
}

export default Login;
