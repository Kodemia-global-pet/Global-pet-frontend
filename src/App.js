import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginForm/LoginForm";
import HomePage from "./pages/HomePage";
import CreateAccount from "./pages/CreateAccount";
import MyPetsPage from "./pages/MyPetsPage";
import PetDetailPage from "./pages/PetDetailPage";
import MyAccount from "./pages/MyAccount/MyAccount";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/pets" element={<MyPetsPage />} />
        <Route path="/pets/:petID" element={<PetDetailPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
