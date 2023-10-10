import { useAuth, ProtectedRoutes } from "./auth";

function ProfilePage () {

    const auth = useAuth();

    // if(!auth.user){
    //     return <Navigate to={"/login"}/>
    // } Esta forma es en caso de hacerlo manualmente sin crear un componente que lo haga
    return(
        <ProtectedRoutes>
            <h1>ProfilePage</h1>
            <h2>Welcome, {auth.user?.userName}</h2>
        </ProtectedRoutes>

    )
}

export { ProfilePage };