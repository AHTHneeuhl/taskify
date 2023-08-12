import { Dashboard, Home } from "pages";
import { Route, Routes } from "react-router-dom";

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RootRoutes;
