import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["efrexz", "juandc", "isaquintisa"];

const AuthContext = createContext();

function AuthProvider({children}){
    const navigate = useNavigate();

    const [ user , setUser] = useState(null);
    const [ newBlogForm, setNewBlogForm] = useState(false);
    const [ deleteConfirmation , setDeleteConfirmation] = useState(false);

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
            newBlogForm,
            setNewBlogForm,
            deleteConfirmation,
            setDeleteConfirmation
            }}>
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