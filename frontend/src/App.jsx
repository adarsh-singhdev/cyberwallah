import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import CyberDictionary from "./pages/CyberDictionary";
import CaseStudies from "./pages/CaseStudies";
import SecurityExplained from "./pages/SecurityExplained";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cyber-dictionary" element={<CyberDictionary />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/security-explained" element={<SecurityExplained />} />
      </Route>
    </Routes>
  );
}

export default App;
