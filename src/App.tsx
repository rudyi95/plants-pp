import React from "react";
import { HashRouter } from "react-router-dom";

import createCache from '@emotion/cache'
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";

import Routers from "./Routes";
import { theme } from "src/utils/constants/ui";

import "./App.css";

const App: React.FC = () => {
  const muiCache = createCache({
    key: 'mui',
    prepend: true
  })
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <Routers />
        </HashRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
