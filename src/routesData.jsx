function routesData(){

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
    return routes;
}

export { routesData };