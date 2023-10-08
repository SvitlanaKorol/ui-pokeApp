import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ViewHomeRoute } from './ViewHomeRoute';
import { ViewPreviewRoute } from './ViewPreviewRoute';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewHomeRoute />} />
        <Route path="/preview/:itemId" element={<ViewPreviewRoute />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
