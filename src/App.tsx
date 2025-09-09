import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import { useState, useEffect } from "react";
import Header from './components/Header';
import UpHeader from './components/UpHeader';
import DownFooter from "./components/DownFooter";
import Footer from "./components/Footer";
import Blog from './page/Blog';
import "./styles/index.css"

function App() {
  const [isUpHeaderVisible, setIsUpHeaderVisible] = useState(true);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  useEffect(() => {
    if (isManuallyClosed) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsUpHeaderVisible(false);
      } else {
        setIsUpHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManuallyClosed]);

  const handleUpHeaderClose = () => {
    setIsUpHeaderVisible(false);
    setIsManuallyClosed(true);
  };
  return (
    <BrowserRouter>
      <div className="-z-30 bg-[#101010] text-[#ffffff] min-h-screen overflow-x-hidden">
        <div className="px-2 md:px-6 lg:px-8 xl:px-12 xl:mx-auto xl:max-w-7xl">
        <UpHeader 
          isVisible={isUpHeaderVisible} 
          onClose={handleUpHeaderClose} 
        />
        <Header isUpHeaderVisible={isUpHeaderVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/case'/>
          <Route path='/blog' element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <DownFooter/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;