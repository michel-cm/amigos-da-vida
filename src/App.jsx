import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { AssistidosContextProvider } from "./contexts/AssistidosContext";
import { InventarioContextProvider } from "./contexts/InventarioContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AssistidosContextProvider>
          <InventarioContextProvider>
            <Router />
          </InventarioContextProvider>
        </AssistidosContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
