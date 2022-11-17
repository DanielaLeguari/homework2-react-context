import { api, setAuthToken } from "../utils/api";
import { toastConfig } from "../utils/toast";
import { toast } from "react-toastify";
import nprogress, { set } from "nprogress";
import { IChildren, IUserContext, IUserLogin } from "../utils/interface";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import nProgress from "nprogress";

export const AuthUserContext = createContext({} as IUserContext);

export const AuthUserProvider = ({ children }: IChildren) => {
    //navigate
    const navigate = useNavigate();
    //useState = armazenar o token
    const [token, setToken] = useState<string |undefined>(localStorage.getItem("token") || "");

    //user é o parametro
    const createUserLogin = async (user: IUserLogin) => {
        try {
            nprogress.start();
            //caminho api //request body
            await api.post("/auth/create", user);
            toast.success("Usuário foi criado com sucesso!", toastConfig);
            navigate("/");//redireciona para login
        } catch (error) {
            toast.error("Erro no cadastro, tente novamente!", toastConfig);
        } finally {
            nProgress.done();
        }
    }

    //login

    const login = async (user: IUserLogin) => {
        try {
            const { data } = await api.post("/auth", user);
            setToken(data);
            localStorage.setItem("token", data);
            setAuthToken(data);
            navigate("/home");
        } catch (error) {
            console.log(error);
            toast.error("Houve algum erro, tente novamente!", toastConfig);
        }
    }

    //logout

    const logout = () => {
        nprogress.start();
        localStorage.removeItem('token'); //apagar a token no navegador
        setAuthToken(undefined); //remove a token do api "axios"
        setToken(undefined); //apagando a token do estado da aplicação
        navigate("/");
        nProgress.done();
    }


    return (
        <AuthUserContext.Provider value={{ createUserLogin, login, token, logout }}>
            {children}
        </AuthUserContext.Provider>
    )
}