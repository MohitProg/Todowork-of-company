
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Addnote from './pages/Addnote';

import Login from './pages/Login';
import Signup from './pages/Signup';

import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import DataContest from './contest/DataContest';

import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Auth from './auth/Auth';

function App() {

 


  return (
 <>
 <DataContest>
<BrowserRouter>
<ToastContainer/>
<Navbar/>


<Routes>
<Route path='/' element={<Auth><Home/></Auth>}/>
<Route path='/addnote' element={<Auth><Addnote/></Auth>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>


</Routes>


</BrowserRouter>
</DataContest>
 
 
 </>
  );
}

export default App;
