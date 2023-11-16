
import './App.css';


import Login from './component/login/Login';
import AddContact from './component/ajoutContact/AddContact';

import ContactList from './component/contact/ContactList';
import UpdatContact from './component/updateContact/UpdatContact';
import { Routes ,Route} from 'react-router-dom'
import Register from './component/register/Register';
import Homepage from './component/HomePage/Homepage';
import Authen from './component/authentification/Authen';
import Admin from './component/authentification/Admin';



function App() {
  return (
   <div>
    
    <Routes>

      <Route path='/' element={<Login/>}  />
      <Route path='/register'   element={<Register/>} />
      <Route path='/Auth' element={ <Authen/>}/>
      <Route path='/Auth/home' element={ <Homepage/> }/>   
      <Route path='/add' element={  <AddContact/>} />
      <Route path='/contact' element={<ContactList/>} />
      <Route path='/update/:id'  element={<UpdatContact/>}/>
    </Routes>
      
      </div>
      
   
  );
}

export default App;
