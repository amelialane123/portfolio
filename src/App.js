import logo from './logo.svg';
import './App.css';
import About from './About.js';
import Projects from './Projects.js';
import TimeLog from './TimeLog.js';
import Resume from './Resume.js';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className="title">Amelia Lane</h1>
        <nav>
          <ul className = "navList">
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to ='/timelog'>Time Log</Link></li>
            <li><Link to ='/resume'>Resume</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path = '/' element = {<About />} />
        <Route exact path='/about' element= {<About />} />
        <Route exact path='/projects' element= {<Projects />} />
        <Route exact path='/timelog' element= {<TimeLog />} />
        <Route exact path='/resume' element= {<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;