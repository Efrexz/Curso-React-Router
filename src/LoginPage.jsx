import { useState } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage(){

    const auth = useAuth();

    const loginAction = (e) =>{
        e.preventDefault();
        auth.login(userName)
    };

    const [userName, setUserName] = useState("");

    //si intenta ingresar a login por url un usuario que ya este registrado se redirecciona al perfil
    if(auth.user) return <Navigate to={"/profile"} />

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={loginAction}>
                <label
                    htmlFor="nameInput"
                    >Ingrese su nombre</label>
                <input
                    type="text"
                    id="nameInput"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ingrese su nombre"/>

                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export { LoginPage };