import Layout from "./layout/Layout"
import { Switch, Route } from 'react-router-dom';
import routes from "./routes"

function App() {
    const rutas = routes.map((ruta, index) => {
        return <Route key={index} path={ruta.path} component={ruta.component} exact={ruta.exact} />
    })

    return (
        <main>
            <Layout>
                <Switch>
                   {rutas}
                </Switch>
            </Layout>
        </main>
    );
}

export default App;