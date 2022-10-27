import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import {
  Indonesia,
  HomePage,
  Covid19,
  Programming,
  Saved,
  NotFound,
} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="indonesia" element={<Indonesia />} />
        <Route path="programming" element={<Programming />} />
        <Route path="saved" element={<Saved />} />
        <Route path="covid-19" element={<Covid19 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
