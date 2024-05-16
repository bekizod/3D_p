// import './App.css'
// eslint-disable-next-line no-unused-vars
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
