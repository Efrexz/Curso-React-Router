import { useAuth , ProtectedRoutes} from "./auth";

function LogoutPage(){

    const auth = useAuth();

    const logoutAction = (e) =>{
        e.preventDefault();
        auth.logout();
    }
    return (
        <ProtectedRoutes>
            <h2>Logout</h2>

            <form onSubmit={logoutAction}>
                <label>¿Seguro que desea salir?</label>
                <button type="submit">Salir</button>
            </form>

        </ProtectedRoutes>
    )
}

export { LogoutPage };