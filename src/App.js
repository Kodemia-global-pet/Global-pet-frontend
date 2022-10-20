import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginForm/LoginForm";
import HomePage from "./pages/HomePage";
import MyPetsPage from "./pages/MyPetsPage";
import PetDetailPage from "./pages/PetDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pets" element={<MyPetsPage />} />
        <Route path="/pets/:petID" element={<PetDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
