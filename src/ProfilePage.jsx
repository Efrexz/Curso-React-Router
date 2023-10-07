import { useAuth } from "./auth";

function ProfilePage () {
    const auth = useAuth();
    return(
        <>
            <h1>ProfilePage</h1>

            <h3>Welcome, {auth.user}</h3>
        </>
    )
}

export { ProfilePage };