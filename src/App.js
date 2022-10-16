import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  )
}

export default App
