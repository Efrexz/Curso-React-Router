import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export {
    AuthProvider,
    useAuth,
    };