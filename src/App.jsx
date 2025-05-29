import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Preloader from './components/Preloader'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import SubjectsPage from './pages/SubjectsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import LegalPage from './pages/LegalPage'
import TutorsPage from './pages/TutorsPage'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      // Remove the immediate scroll - let it naturally stay at top
      // or use smooth scrolling if needed:
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [2300])
  }, []) // Add dependency array to prevent infinite re-runs

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <Preloader />}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/tutors" element={<TutorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
