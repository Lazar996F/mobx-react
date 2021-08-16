import routes from './Routes'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Sidebar from "./Components/Sidebar";

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar/>
                <Switch>
                    {routes.map(route => (
                        <Route path={route.path} component={route.component} exact={route.exact}></Route>))}
                    <Route path="/">
                        <Redirect to="/privacy"/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
