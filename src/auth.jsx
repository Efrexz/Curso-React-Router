import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({children}){
    const navigate = useNavigate();

    const [ user , setUser] = useState(null);

    function login(userName){
        setUser(userName);
        navigate("/profile")

    }

    function logout(){
        setUser(null);
        navigate("/")
    }

    const auth = { user, login, logout };

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const auth = useContext(AuthContext);
    return auth;
}

//funcion para que si intentan ingresar por url a una ruta privada y no esten registrados se redireccione al login
function ProtectedRoutes(props){
    const auth = useAuth();
    if(!auth.user){//si el usuario no esta registrado e intenta ingresar alguna ruta que sea privada en la cual llamemos al componente como profile o logout se redirecciona a login
        return <Navigate to={"/login"}/>
    }
    return(props.children)
}

export {
    AuthProvider,
    useAuth,
    ProtectedRoutes,
    };