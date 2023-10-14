import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const adminList = ["efrexz", "juandc", "isaquintisa"];

const AuthContext = createContext();

function AuthProvider({children}){
    const navigate = useNavigate();

    const [ user , setUser] = useState(null);

    function login(userName){
        const isAdmin = adminList.find(admin => admin === userName);
        setUser({userName, isAdmin});
        navigate("/profile");
    }

    function logout(){
        setUser(null);
        navigate("/")
    }

    return(
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            }}>
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