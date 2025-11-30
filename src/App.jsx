import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Destinos from "./pages/Destinos";
import Ofertas from "./pages/Ofertas";
//import "./App.css";



function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;