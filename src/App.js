import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import ContactUs from './Pages/ContactUs/ContactUs';
import Payment from './Pages/payment/Payment'
import Review from './Pages/Review/Review';
import Schedule from './Pages/Dashboard/Schedule';
import Token from './Pages/Dashboard/Token'
import MyToken from './Pages/Dashboard/MyToken'
import Walet from './Pages/Dashboard/Walet'

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="review" element={<Review />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>}
        />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="my-token" element={<MyToken></MyToken>}></Route>
          <Route path="walet" element={<Walet></Walet>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
          <Route path="schedule" element={<RequireAdmin><Schedule></Schedule></RequireAdmin>}></Route>
          <Route path="token" element={<RequireAdmin><Token></Token></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
