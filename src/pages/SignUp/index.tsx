import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
import { useForm } from "react-hook-form";
import { IUserLogin } from '../../utils/interface';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const { createUserLogin } = useContext(AuthUserContext);
  //form
  const { register, handleSubmit } = useForm<IUserLogin>();

  const createLogin = async (data: IUserLogin) => {
    await createUserLogin(data);
  }


  return (
    <main className={styles.containerFormSignUp} >
      <form className={styles.formSignUp} onSubmit={handleSubmit(createLogin)}>
        <h1>Cadastre-se aqui!</h1>
        <label htmlFor="login">Digite um login</label>
        <input type="text" required id="login" {...register("login")} />

        <label htmlFor="senha">Digite uma senha</label>
        <input type="password" required id="senha" {...register("senha")} />

        <input className={styles.btnCriarLogin} type="submit" value="Criar usuário" />

        <div>
          <Link style={{ textDecoration: "none", color: "var(--cor-fonte-login)" }} to={"/"}>Voltar para login</Link>
        </div>
      </form></main>
  );
}

export default SignUp;
