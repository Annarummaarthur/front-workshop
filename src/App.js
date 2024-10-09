import Header from "./Header";
import Accueil from "./pages/Accueil/Accueil";
import Mes_Demande from "./pages/Mes_Demandes/Mes_Demande";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="reactor">
        <Header />

        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/demandes/list" element={<Mes_Demande />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
