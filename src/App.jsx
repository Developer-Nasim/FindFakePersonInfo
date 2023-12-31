import PageLayout from './components/Singlecomponents/PageLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './global.css'
import { Navigate, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Howto from './pages/Howto.jsx';
import Contactus from './pages/Contactus.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfServices from './pages/TermsOfServices.jsx';
import Profile from './pages/dashboard/Profile.jsx';
import LinkDetails from './pages/dashboard/LinkDetails.jsx';
import Auth from './pages/Auth.jsx';
import { useAuth } from './Contexts/AuthContext.jsx';
import PreivewTarget from './components/PreivewTarget/index.jsx'; 
import NotFound from './pages/NotFound.jsx'; 


const PrivateRoute = () => {
  const { curentUser } = useAuth();
  return curentUser ? <Outlet /> : <Navigate to="/login" />;
};
const LogInControll = () => {
  const { curentUser } = useAuth();
  return curentUser ? <Navigate to="/dashboard" /> : <Outlet /> ;
};



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='howto' element={<Howto/>}/>
      <Route path='contactus' element={<Contactus/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='terms-of-services' element={<TermsOfServices/>}/>

      <Route exact path='/dashboard' element={<PrivateRoute/>}> 
          <Route exact path='/dashboard' element={<Profile/>}/> 
          <Route exact path='/dashboard/linkdetails/:id' element={<LinkDetails/>}/> 
      </Route>

      <Route exact path='/join' element={<LogInControll/>}> 
          <Route exact path='/join' element={<Auth/>}/>  
      </Route>

      <Route exact path='/login' element={<LogInControll/>}> 
          <Route exact path='/login' element={<Auth/>}/>  
      </Route>
      <Route exact path='/yours' element={<PreivewTarget/>}/>
       
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);


function App() { 

  return (
    <> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
