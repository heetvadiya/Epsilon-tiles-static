import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import WhySPC from './pages/WhySPC';
import Contact from './pages/Contact';
import Specifications from './pages/Specifications';
import Packing from './pages/Packing';
import InstallationGuide from './pages/InstallationGuide';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <ThemeToggle />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/collection/:id" element={<ProductDetail />} />
              <Route path="/why-spc" element={<WhySPC />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/specifications" element={<Specifications />} />
              <Route path="/packing" element={<Packing />} />
              <Route path="/installation-guide" element={<InstallationGuide />} />
              <Route path="*" element={<div className="container py-20 text-center"><h1>Page Not Found</h1></div>} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;