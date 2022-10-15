import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import CreateAccount from './pages/CreateAccount'
=======
import LoginPage from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage';
>>>>>>> 44f4da1967425a9e54d8d292d5c0405d41913dae

function App() {
  return (
    <div>
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<CreateAccount/>}></Route>    
    </Routes>
  </div>
  );
=======
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
>>>>>>> 44f4da1967425a9e54d8d292d5c0405d41913dae
}

export default App
