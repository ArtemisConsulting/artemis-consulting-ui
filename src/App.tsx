/** @module App */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { designTheme } from "./common/theme/designTheme";
import LandingPage from "./pages/LandingPage/LandingPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={designTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
