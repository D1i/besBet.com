import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage, AuthPage, RegistrationPage} from "./page";
import {Header, VersionInfo} from "./components";

function App() {
    return (
        <Router>
            <Header/>
            <VersionInfo/>
            <Switch>
                <Route path='/auth'>
                    <AuthPage/>
                </Route>
                <Route path='/registration'>
                    <RegistrationPage/>
                </Route>
                <Route path='/'>
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
