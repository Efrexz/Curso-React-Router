import { NavLink } from "react-router-dom";

function Menu () {
    const routes = [];
    routes.push({
        to: "/",
        text: "Home",
        id: 1
    });
    routes.push({
        to: "/blog",
        text: "Blog",
        id: 2
    });
    routes.push({
        to: "/profile",
        text: "Profile",
        id: 3
    });

    return(
        <nav>
            <ul>
                {routes.map((route) => (
                    <li key={route.id}>
                        <NavLink
                            style={({ isActive }) => ({
                                    color: isActive ? "red" : "black",
                            })}
                            to={route.to}
                            >{route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export { Menu };