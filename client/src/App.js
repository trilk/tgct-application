import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/layout/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthedRoute from "./components/AuthedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <AuthedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
