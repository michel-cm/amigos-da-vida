import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Assistidos } from "./pages/Assistidos";
import { Home } from "./pages/Home";
import { Inventario } from "./pages/Inventario";
import { Documentos } from "./pages/Documentos";

import { PageAddAssistido } from "./pages/Assistidos/PageAddAssistido";
import { PageViewItem } from "./pages/Inventario/PageViewItem";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/assistidos" element={<Assistidos />} />
        <Route path="/assistidos/adicionar" element={<PageAddAssistido />} />
        <Route path="/assistidos/:id" element={<PageAddAssistido />} />

        <Route path="/inventario" element={<Inventario />} />
        <Route path="/inventario/:id" element={<PageViewItem />} />

        <Route path="/documentos" element={<Documentos />} />
      </Route>
    </Routes>
  );
}
