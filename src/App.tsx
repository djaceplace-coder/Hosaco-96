import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Alumni from './pages/Alumni';
import GetInvolved from './pages/GetInvolved';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import News from './pages/News';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="news" element={<News />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center"><h1 className="font-serif text-3xl">Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

