import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import Comparison from "./components/Comparison";
import Companies from "./components/Companies";
import Trust from "./components/Trust";
import Features from "./components/Features";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Courses />
              <Stats />
              <Comparison />
              <Companies />
              <Trust />
              <Features />
              <Footer />
            </>
          }
        />

        {/* COURSES PAGE */}
        <Route
          path="/courses"
          element={
            <>
              <Courses />
              <Stats />
              <Comparison />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App; 