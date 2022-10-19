import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginForm/LoginForm";
import HomePage from "./pages/HomePage";
import PetDetail from "./pages/PetDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pet/:petID" element={<PetDetail />} />
      </Routes>
    </div>
  );
}

export default App;
