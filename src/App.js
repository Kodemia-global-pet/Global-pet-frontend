import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage';
import "@fontsource/roboto"; 

function App() {
  return (    
    <Routes>
      <Route path="/" element={<HomePage />}></Route>  
      <Route path="/login" element={<LoginPage/>}></Route>  
    </Routes> 
  );
}

export default App;
