import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginForm/LoginForm";
import HomePage from "./pages/HomePage";
import PetDetail from "./pages/PetDetail";
import FaqPage from "./pages/FaqPage";
import AddPets from "./pages/AddPets";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/pet/:petID" element={<PetDetail />} />
        <Route path="/addpets" element={<AddPets />} />
      </Routes>
    </div>
  );
}

export default App;
