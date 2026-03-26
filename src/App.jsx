import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// Placeholder imports for pages we are going to create
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="service-detail" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
