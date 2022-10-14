import { Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<CreateAccount/>}></Route>    
    </Routes>
  </div>
  );
}

export default App;
