// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from '../component/header';
import About from '../pages/about';
import Skills from '../pages/skill';
// import Projects from '../pages/projects';

function UserRoutes() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default UserRoutes;