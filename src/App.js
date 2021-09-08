
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
const App = () => {
  return (

    <>
      <Header />
      <ParticlesBackground />

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/">

          <Home />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
