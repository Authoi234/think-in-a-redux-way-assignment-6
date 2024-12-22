import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/post/:postId' element={<Post></Post>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
