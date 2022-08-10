import React from 'react';
import Header from './components/UI/Header/Header';
import Form from './components/page/Form/Form';
import { Route, Routes } from "react-router-dom";
import Profile from './components/page/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
