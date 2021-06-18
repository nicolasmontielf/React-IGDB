import Index from "../pages/Index"
import About from "../pages/About"

const routes = [
    {
        path: "/",
        exact: true,
        component: Index
    },
    {
        path: "/about",
        exact: true,
        component: About
    },
]

export default routes;