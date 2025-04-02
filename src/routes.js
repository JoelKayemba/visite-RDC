// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Histoire from "./pages/Histoire";
import Destinations from "./pages/Destinations";
import Richesse from "./pages/Richesse";
import Culture from "./pages/Culture";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/histoire" element={<Histoire />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/richesses" element={<Richesse />} />
      <Route path="/culture" element={<Culture />} />
      
    </Routes>
  );
};

export default AppRoutes;
