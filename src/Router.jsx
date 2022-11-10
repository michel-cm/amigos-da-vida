import { Routes, Route } from "react-router-dom";
import { Assistidos } from "./pages/assistidos";
import { Home } from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assistidos" element={<Assistidos />} />
    </Routes>
  );
}
