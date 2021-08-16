import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import DataPrivacy from "./Components/DataPrivacy";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/">
                    <Redirect to="/privacy" />
                </Route>
                <Route path="/privacy" component={DataPrivacy}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
