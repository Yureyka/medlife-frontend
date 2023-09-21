import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AdminRoutes } from "./adminRoutes";
import { ClientRoutes } from "./clientRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<ClientRoutes />} />
    </Routes>
  );
};

export default App;
