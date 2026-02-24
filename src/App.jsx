import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CosmicBackground } from "./components/CosmicBackground";
import { LangSwitcher } from "./components/LangSwitcher";
import { CookieBanner } from "./components/CookieBanner";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Screenshots } from "./sections/Screenshots";
import { Advantages } from "./sections/Advantages";
import { Prospects } from "./sections/Prospects";
import { Download } from "./sections/Download";
import { Footer } from "./sections/Footer";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { NotFound } from "./pages/NotFound";

function HomePage() {
  return (
    <>
      <LangSwitcher />
      <CosmicBackground />
      
      <div className="relative">
        <Hero />
        <Features />
        <Advantages />
        <Prospects />
        <Screenshots />
        <Download />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen text-foreground selection:bg-purple-500/30">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
