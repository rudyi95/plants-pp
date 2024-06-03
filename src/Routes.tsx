import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "src/containers/layout";

import { HomePage } from "src/pages/homePage";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
      </Route>
      <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
    </Routes>
  );
};

export default Routers;
