import AuthLayout from "pages/auth";
import Home from "pages/home";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import PrivateRoute from "components/PrivateRoute";

const routes = [
    {
        path: '/',
        element: <Home />,
        auth: true
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

//* Route dışarı aktarma  
export default authCheck(routes);