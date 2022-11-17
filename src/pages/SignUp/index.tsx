import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
import { useForm } from "react-hook-form";
import { IUserLogin } from '../../utils/interface';

const SignUp = () => {

  const { createUserLogin } = useContext(AuthUserContext);
  //form
  const { register, handleSubmit} = useForm<IUserLogin>();

  const createLogin = async (data: IUserLogin) => {
    await createUserLogin(data);
  }


  return (
    <form onSubmit={handleSubmit(createLogin)}>
      <label htmlFor="login">Digite um login</label>
      <input type="text" required id="login" {...register("login")} />

      <label htmlFor="senha">Digite uma senha</label>
      <input type="text" required id="senha" {...register("senha")} />

      <input type="submit" value="Criar usuário" />
    </form>
  );
}

export default SignUp;
