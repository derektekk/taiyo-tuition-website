import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageFade from "./components/PageFade";
import HomePage from "./pages/HomePage";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";
import ContactPage from "./pages/ContactPage";
import EnrollNowPage from "./pages/EnrollNowPage";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPage from "./pages/PrivacyPage";
import LegalPage from "./pages/LegalPage";
import TutorsPage from "./pages/TutorsPage";
import ResultsPage from "./pages/ResultsPage";
import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import LocationPage from "./pages/LocationPage";
import FaqPage from "./pages/FaqPage";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <PageFade>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/subjects" element={<SubjectsPage />} />
                    <Route
                        path="/subjects/:slug"
                        element={<SubjectDetailPage />}
                    />
                    <Route path="/tutors" element={<TutorsPage />} />
                    <Route path="/results" element={<ResultsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                        path="/classes"
                        element={<Navigate to="/subjects" replace />}
                    />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/location" element={<LocationPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/enroll" element={<EnrollNowPage />} />
                    <Route path="/enroll/thank-you" element={<ThankYouPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/legal" element={<LegalPage />} />
                </Routes>
            </PageFade>
            <Footer />
        </Router>
    );
}

export default App;
