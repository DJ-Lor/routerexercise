import './App.css';
import { Routes , Route, Outlet} from 'react-router-dom'
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { Navbar } from './components/navBar';
import { ContactPage} from './pages/contactPage';
import { ArticlePage } from './pages/articlesPage';

function App() {
  return (
    <div className="App">

      <Navbar />
      
     
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Outlet />} >
              <Route index element={<AboutPage />} />
              <Route path="/about/contact" element={<ContactPage />} />
          </Route>

          <Route path="/articles/:id" element={<ArticlePage />} />


      </Routes>

    </div>
  );
}

export default App;
