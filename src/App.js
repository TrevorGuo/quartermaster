import Home from './pages/Home';
import Groceries from './pages/Groceries';
import Cookbook from './pages/Cookbook';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/cookbook" element={<Cookbook />} />
      </Routes>
    </Router>
  );
}

export default App;
