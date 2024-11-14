import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import Menu from './components/Menu';

const App: React.FC = () => (
  <div>
    <Menu />
    <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  </div>
);

export default App;
