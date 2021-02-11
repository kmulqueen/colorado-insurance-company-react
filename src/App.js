import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
