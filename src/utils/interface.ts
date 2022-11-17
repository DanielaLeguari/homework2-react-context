
export interface IUserLogin {
    login: string,
    senha: string
}

export interface IUserContext {
    createUserLogin: (user: IUserLogin) => Promise<void>,
    login: (user: IUserLogin) => Promise<void>,
    token?: string, //tornando a token acessivel pelo contexto
    logout: () => void
}

export interface IChildren {
    children?: React.ReactNode;
}