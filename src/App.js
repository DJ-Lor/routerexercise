import './App.css';
import { Routes , Route} from 'react-router-dom'
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { Navbar } from './components/navBar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <h1> App Home page</h1>
     
      <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>

    </div>
  );
}

export default App;
