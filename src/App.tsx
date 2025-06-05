/** @module App */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

const App = (): React.JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
