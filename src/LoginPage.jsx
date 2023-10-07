import { useState } from "react";
import { useAuth } from "./auth";

function LoginPage(){

    const auth = useAuth();

    const loginAction = (e) =>{
        e.preventDefault();
        auth.login(userName)
    };

    const [userName, setUserName] = useState("");
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