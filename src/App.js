import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
// import About from './components/about';
// import Project from './components/project';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Preloader from './components/preloader';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (!isMounted.current) {
      setLoading(true)
      setTimeout(() => setLoading(false), 3000)
      isMounted.current = true;
    }
  }, [])

  return (
    <div>


        {/* <Preloader load={load} /> */}
        <Router>
          <div className="App">
        {loading === false ? (
          <div>

            <Navbar />
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/project" element={<Project />} /> */}
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            {/* <Footer /> */}
          </div>
          ):(
            <Preloader/>
            )}
            </div>
          </Router>
    </div>
  )
}

export default App;
