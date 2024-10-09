import Header from "./Header";
import Accueil from "./pages/Accueil/Accueil";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Inscription from "./components/Auth/Inscription";

function App() {
  return (
    <Router>
      <div className="reactor">
        <Header />

        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
