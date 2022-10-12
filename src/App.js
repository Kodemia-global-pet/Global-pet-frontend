import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>  
      <Route path="/login" element={<LoginPage/>}></Route>  
    </Routes>
  </div>
  );
}

export default App;
