import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './pages/Landing';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/About';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from 'react-hot-toast';
import ServicesPage from './pages/Services';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

      <Header />
      <div className="flex-grow mt-12"> {/* push content below fixed header */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
      <Footer />
    </div>
    <Toaster></Toaster>
    </Router>
  );
}

export default App;
