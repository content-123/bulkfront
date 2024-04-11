
import './App.css';
import EmailForm from './components/EmailForm';
import Login from './components/Login';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
         <Route path="/"  element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/send-email" element={<EmailForm />} />
  </Routes>
    </div>
  );
}

export default App;
