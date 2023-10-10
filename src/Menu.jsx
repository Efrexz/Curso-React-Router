import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import { routesData } from "./routesData";

function Menu () {

    const routes = routesData();

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