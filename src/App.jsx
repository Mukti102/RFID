import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Products.jsx";
import Benefit2 from "./components/Benefit2.jsx";
import CTA from "./components/Cta.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/not_found.jsx";
import Benefit1 from "./components/Benefit1.jsx";
import AllProducts from "./components/AllProducts.jsx";
import Tips from "./components/Tips.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <div className="w-full overflow-hidden text-[18px] font-poppins h-fit">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Product />
            <Tips />
            <Benefit2 />
            <Benefit1 />
            {/* <Gallery /> */}
            <AllProducts />
            <CTA />
            <Contact />
            <Footer />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
