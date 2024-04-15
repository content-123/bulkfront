
// import './App.css';
// import EmailForm from './components/EmailForm';
// import Login from './components/Login';
// import Register from './components/Register';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';
// function App() {
//   return (
//     <div className="App">
     
//     <Routes>
//          <Route path="/"  element={<Login />} />
//          {/* <Route exact path='/send-email' element={<ProtectedRoute/>}>
//          <Route path="/send-email" element={<EmailForm />} /></Route> */}

//          <Route path="/register" element={<Register />} />
//          {/* <Route path="/send-email" element={<EmailForm />} /> */}
         
//   </Routes>
 
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import EmailForm from './components/EmailForm';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <ProtectedRoute path="/send-email" element={<EmailForm />} ></ProtectedRoute> */}
          <Route path="/send-email" element={<EmailForm />} ></Route>
          {/* <Route path="/send-email" element={<EmailForm />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </div>
  );
}

export default App;

