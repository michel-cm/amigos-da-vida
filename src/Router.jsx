import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Assistidos } from "./pages/Assistidos";
import { Home } from "./pages/Home";
import { Inventario } from "./pages/Inventario";
import { Profissionais } from "./pages/Profissionais";
import { Documentos } from "./pages/Documentos";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/assistidos" element={<Assistidos />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/documentos" element={<Documentos />} />
      </Route>
    </Routes>
  );
}
