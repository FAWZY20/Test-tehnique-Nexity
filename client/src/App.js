import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Boutique from "./pages/Boutique/Boutique";
import Ajouter from "./pages/Ajouter/Ajouter"
import List from "./pages/List/List"
import './App.css';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Boutique />} />
          <Route path="/ajouter" element={<Ajouter />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
