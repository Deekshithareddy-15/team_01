import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfileForm from './components/ProfileForm';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProfileForm />
      </div>
    </div>
  );
}

export default App;
