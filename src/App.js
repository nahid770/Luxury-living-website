import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/AboutUs/About';
import Admin from './Pages/Admin/Admin';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home/Home';
import Navber from './Pages/Home/Navber/Navber';
import Login from './Pages/Login/Login';
import Projects from './Pages/Projects/Projects';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
     <div className=' bg-[#F6F6F6]'>
        <div className='mx-6 md:mx-40 lg:mx-46 md:pt-4'>
            <Navber></Navber>
        </div>
        
     </div>
     <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/aboutus' element={<About></About>}></Route>
          <Route path='/project' element={<Projects></Projects>}></Route>
          <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <div className='bg-indigo-700'>
        <div className='mx-6 md:mx-40 lg:mx-46'> 
              <Footer></Footer>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
