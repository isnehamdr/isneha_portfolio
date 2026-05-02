import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';
import WorkDetail from './pages/WorkDetail';
import SEO from './components/SEO';

// Homepage with enhanced metadata
const HomeWithSEO = () => (
  <>
    <SEO 
      title="Home"
      description="Isneha Manandhar - Fullstack Developer based in Pokhara, Nepal. Expert in React, Tailwind CSS, and modern web development. View my portfolio and projects."
      url="https://isnehamanandhar.com.np/"
    />
    <HomePage />
  </>
);

// Contact page with priority meta tags
const ContactWithSEO = () => (
  <>
    <SEO 
      title="Contact | Get in Touch"
      description="Contact Isneha Manandhar - Fullstack Developer. Available for projects and collaborations. Email: isnehadev26@gmail.com"
      keywords="contact Isneha Manandhar, hire developer, web development Nepal, freelance developer"
      url="https://isnehamanandhar.com.np/contact"
    />
    <ContactPage />
  </>
);

// About page
const AboutWithSEO = () => (
  <>
    <SEO 
      title="About"
      description="Learn about Isneha Manandhar - Fullstack developer with expertise in React, modern web technologies, and creative problem solving."
      url="https://isnehamanandhar.com.np/about"
    />
    <AboutPage />
  </>
);

// Works page
const WorksWithSEO = () => (
  <>
    <SEO 
      title="Portfolio | Projects"
      description="Explore the portfolio of Isneha Manandhar featuring web development projects, React applications, and creative digital solutions."
      url="https://isnehamanandhar.com.np/works"
    />
    <WorksPage />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeWithSEO />} />
          <Route path="/about" element={<AboutWithSEO />} />
          <Route path="/works" element={<WorksWithSEO />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
          <Route path="/contact" element={<ContactWithSEO />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;