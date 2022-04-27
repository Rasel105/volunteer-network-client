import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Register from './Shared/Register/Register';
import Login from './Shared/Login/Login'
import Events from './Pages/Events/Events';
import Donation from './Pages/Donation/Donation';
import VolunteerLists from './Pages/VolunteerLists/VolunteerLists';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/donation' element={<Donation />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/volunteer-list' element={<VolunteerLists />}></Route>
      </Routes>
    </div>
  );
}

export default App;
