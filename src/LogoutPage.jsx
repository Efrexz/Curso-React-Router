import { useAuth } from "./auth";

function LogoutPage(){

    const auth = useAuth();

    const logoutAction = (e) =>{
        e.preventDefault();
        auth.logout();
    }
    return (
        <>
            <h2>Logout</h2>

            <form onSubmit={logoutAction}>
                <label>¿Seguro que desea salir?</label>
                <button type="submit">Salir</button>
            </form>

        </>
    )
}

export { LogoutPage };