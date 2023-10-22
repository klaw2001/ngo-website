import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./components/Mainpage/Mainpage";
import Cause from "./components/Pages/Cause";
import Events from "./components/Pages/Events";
import Contact from "./components/Pages/Contact";
import AboutUs from "./components/Pages/AboutUs";
import Gallery from "./components/Pages/Gallery";
import Topbar from "./components/Header/Topbar";
import MainNavbar from "./components/Header/MainNavbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <header className="position-relative">
          <Topbar />
          <MainNavbar />
        </header>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/cause" element={<Cause />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
