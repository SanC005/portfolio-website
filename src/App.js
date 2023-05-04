import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App">
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App;
