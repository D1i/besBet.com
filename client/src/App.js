import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "./page";
import { Header } from "./components";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/'>
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
