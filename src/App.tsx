import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Header from "./components/portofolio/Header";
import Landing from "./pages/landing/Landing";
import Footer from "./components/portofolio/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Resume from "./pages/resume/Resume";
import PageNotFound from "./pages/404/PageNotFound";

// Type for the personal details
interface PersonalDetails {
  name: string;
  location: string;
  email: string;
  brand: string;
  color: string;
}

function App() {
  // Personal details for the user
  const personalDetails: PersonalDetails = {
    name: "Ilham Fathurohman",
    location: "Bandung",
    email: "Faturahman.ilham@gmail.com",
    brand: "The combination of technical expertise, creative thinking, and my background in computer science allows me to approach every project with a deep understanding of the end-user perspective, resulting in highly effective user-centered digital products.",
    color: ""
  };

  const location = useLocation();

  // Type for the state of originalTitle (string or undefined)
  const [originalTitle, setOriginalTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Handle document title change when tab visibility changes
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 Git pulling you back in!";
      } else {
        document.title = originalTitle || "";
      }
    };

    // Listen for visibility change events
    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Define routes */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Landing
              name={personalDetails.name}
              tagline={personalDetails.brand}
            />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/resume"
          element={<Resume brand={personalDetails.brand} name={personalDetails.name} color={personalDetails.color} />}
        />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
