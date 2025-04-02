import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop/>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
