import Header from "./Header";
import Accueil from "./pages/Accueil/Accueil";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Inscription from "./components/Auth/Inscription";
import Profile from "./components/User/Profile";
import Login from "./components/Auth/Login";
import Mes_Demande from "./pages/Mes_Demandes/Mes_Demande";

function App() {
  return (
    <Router>
      <div className="reactor">
        <Header />

        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/compte" element={<Profile />} />
          <Route path="/demandes/list" element={<Mes_Demande />} />
          <Route path="/connexion" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
