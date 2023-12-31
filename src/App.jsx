import {Children, lazy, Suspense} from 'react'
import PageLayout from './components/Singlecomponents/PageLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './global.css'
import { Navigate, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { useAuth } from './Contexts/AuthContext.jsx';

// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Howto from './pages/Howto.jsx';
// import Contactus from './pages/Contactus.jsx';
// import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
// import TermsOfServices from './pages/TermsOfServices.jsx';
// import Profile from './pages/dashboard/Profile.jsx';
// import LinkDetails from './pages/dashboard/LinkDetails.jsx';
// import Auth from './pages/Auth.jsx';
// import PreivewTarget from './components/PreivewTarget/index.jsx'; 
// import NotFound from './pages/NotFound.jsx'; 

import Preloader from './components/Preloader/index.jsx';


const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const HowtoPage = lazy(() => import('./pages/Howto.jsx'))
const ContactusPage = lazy(() => import('./pages/Contactus.jsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfServicesPage = lazy(() => import('./pages/TermsOfServices.jsx'))
const ProfilePage = lazy(() => import('./pages/dashboard/Profile.jsx'))
const LinkDetailsPage = lazy(() => import('./pages/dashboard/LinkDetails.jsx'))
const AuthPage = lazy(() => import('./pages/Auth.jsx'))
const PreivewTargetPage = lazy(() => import('./components/PreivewTarget/index.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))
 

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
        <Route path='' element={<HomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='howto' element={<HowtoPage/>}/>
        <Route path='contactus' element={<ContactusPage/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicyPage/>}/>
        <Route path='terms-of-services' element={<TermsOfServicesPage/>}/>

        <Route exact path='/dashboard' element={<PrivateRoute/>}> 
            <Route exact path='/dashboard' element={<ProfilePage/>}/> 
            <Route exact path='/dashboard/linkdetails/:id' element={<LinkDetailsPage/>}/> 
        </Route>

        <Route exact path='/join' element={<LogInControll/>}> 
            <Route exact path='/join' element={<AuthPage/>}/>  
        </Route>

        <Route exact path='/login' element={<LogInControll/>}> 
            <Route exact path='/login' element={<AuthPage/>}/>  
        </Route>
        <Route exact path='/yours' element={<PreivewTargetPage/>}/>
        
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
  )
);


function App() { 

  return (
    <Suspense fallback={ <Preloader/> }>
      <RouterProvider router={router}/>
    </Suspense> 
  )
}

export default App
