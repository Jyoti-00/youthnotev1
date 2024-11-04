import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
