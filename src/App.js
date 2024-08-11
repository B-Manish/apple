import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";

import { Box } from "@mui/material";
import Template from "./components/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template page={<Home />}></Template>} />
    </Routes>
  );
}

export default App;
