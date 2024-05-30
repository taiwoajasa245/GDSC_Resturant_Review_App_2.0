import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Dashboard from "./Components/Pages/Dashboard";
import { useAuth } from "./Context/AuthContext";

function App() {
  const { isAuth } = useAuth();

  return (
    <Router>
      <Routes>
        
        <Route
          path="/writeareview"
          element={isAuth ? <Dashboard /> : <Home />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard-panel"
          element={isAuth ? <Dashboard /> : <Login />}
        />

        <Route
          path="/login"
          element={!isAuth ? <Login /> : <Navigate to="/dashboard-panel" />}
        />
        <Route
          path="/signup"
          element={!isAuth ? <SignUp /> : <Navigate to="/dashboard-panel" />}
        />

        {/* Redirect all other routes to Home */}
        <Route path="*" element={<Navigate to="/writeareview" />} />
      </Routes>
    </Router>
  );
}

export default App;
