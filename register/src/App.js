import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import AddUser from './user/AddUser'
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddUser/>}></Route>
        <Route path='/edit/:id' element={<EditUser/>}></Route>
        <Route path='/view/:id' element={<ViewUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
