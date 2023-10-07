import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu () {
    const routes = [];
    routes.push({
        to: "/",
        text: "Home",
        id: 1,
        private: false
    });
    routes.push({
        to: "/blog",
        text: "Blog",
        id: 2,
        private: false
    });
    routes.push({
        to: "/profile",
        text: "Profile",
        id: 3,
        private: true
    });
    routes.push({
        to: "/login",
        text: "Login",
        id: 4,
        publicOnly: true,
        private: false
    });
    routes.push({
        to: "/logout",
        text: "Logout",
        id: 5,
        private: true
    });

    const auth = useAuth();

    return(
        <nav>
            <ul>
                {routes.map((route) => {

                    if(route.private && !auth.user){return null}//si el usuario no esta registrado y la ruta es solo para usuarios registrados no la muestra
                    if(route.publicOnly && auth.user){return null}

                    return (<li key={route.id}>
                    <NavLink
                        style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                        })}
                        to={route.to}
                        >{route.text}
                    </NavLink>
                </li>)
                })}
            </ul>
        </nav>
    )
}

export { Menu };