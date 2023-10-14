import { Navigate} from "react-router-dom";
import { useAuth } from "./auth";

//componente para que si intentan ingresar por url a una ruta privada y no esten registrados se redireccione al login
function ProtectedRoutes(props){
    const auth = useAuth();
    if(!auth.user){//si el usuario no esta registrado e intenta ingresar alguna ruta que sea privada en la cual llamemos al componente como profile o logout se redirecciona a login
        return <Navigate to={"/login"}/>
    }
    return(props.children)
}

export {ProtectedRoutes}