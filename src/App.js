import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import PetDetail from './pages/PetDetail';
import MyAccount from './pages/MyAccount/MyAccount';
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/pet" element={<PetDetail />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/pet/:petID" element={<PetDetail />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
