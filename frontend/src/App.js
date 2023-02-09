/* import logo from './logo.svg'; */
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from './Components/Pages/LandingPage/Landing';
import Home from './Components/Pages/Home/Home';
import Error from './Components/Pages/Error404/Error';
import Faq from './Components/Pages/FAQ/Faq';
import Adminhome from './Components/Pages/Adminhome/Adminhome';
import Contact from './Components/Pages/Contact/Contact';
import Userprofile from './Components/Pages/Userprofile/Userprofile';
import AppliedJobInfo from './Components/Pages/AppliedJobInfo/AppliedJobInfo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing Page Routes */}
          <Route path='/' element={<Landing/>}></Route>
          
          {/* User Routes */}
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/userprofile' element={<Userprofile/>}></Route>
          <Route path='*' element={<Error/>}></Route>

          {/* Admin Routes */}
          <Route path='/adminhome' element={<Adminhome/>}></Route>
          {/* <Route path='/appliedjobinfo' element={<AppliedJobInfo/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
