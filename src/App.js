import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Register from './Components/Logins/Register/Register';
import Login from './Components/Logins/Login/Login';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>


        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
