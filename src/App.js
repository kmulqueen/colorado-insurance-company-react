import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import AutoInsurancePage from "./pages/AutoInsurancePage";
import HomeInsurancePage from "./pages/HomeInsurancePage";
import LifeInsurancePage from "./pages/LifeInsurancePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/home-insurance" component={HomeInsurancePage} />
        <Route exact path="/life-insurance" component={LifeInsurancePage} />
        <Route exact path="/auto-insurance" component={AutoInsurancePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
