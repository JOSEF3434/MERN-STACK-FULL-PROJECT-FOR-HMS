// AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Login from "./pages/Login"; 
import Contact from "./pages/Contact"; 
import UserLogin from "./pages/UserLogin";
import Service from './pages/Service';
import Signup from "./pages/Signup";
import ResetPassword from './component/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/userlogin" element={<UserLogin />} /> 
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/Signup" element={<Signup />} /> 
      </Routes>
      
      <ToastContainer />
    </Router>
  );
};

export default App;
