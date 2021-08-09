import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage, AuthPage, RegistrationPage} from "./page";
import {Header} from "./components";

function App() {
    return (
        <Router>
            <Header/>
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
