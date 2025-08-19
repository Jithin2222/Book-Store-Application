import './App.css'
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Market from './components/Market';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Profile from './components/Profile';
import ViewProfile from './components/ViewProfile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/market' element={<Market/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/view' element={<ViewProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
