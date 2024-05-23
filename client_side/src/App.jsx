import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Components/Pages/Home"; 
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/writeareview" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard-panel" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/* Redirect all other routes to Home */}
          <Redirect to="/writeareview" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
