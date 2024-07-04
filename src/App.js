import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // CSSをここに書いてください
import { Home } from './view/HomePageView';
import { Map } from './view/MapPageView';
import { Send } from './view/SendPageView';
import { Login } from './view/LoginPageView';
import { QRCode } from './view/QRcodeView';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">Waseda stamp</header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qrcode" element={<QRCode />} />
            <Route path="/map" element={<Map />} />
            <Route path="/send" element={<Send />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <nav className="navbar">
          <Link to="/qrcode"><i className="icon">QR</i></Link>
          <Link to="/location"><i className="icon">Location</i></Link>
          <Link to="/"><i className="icon home-icon">Home</i></Link>
          <Link to="/send"><i className="icon">Send</i></Link>
          <Link to="/account"><i className="icon">Account</i></Link>
        </nav>
      </div>
    </Router>
  );
};

export default App;
