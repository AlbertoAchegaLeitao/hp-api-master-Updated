import React from "react";
import { Outlet } from "react-router";

import Nav from "./components/Nav";

import { AppProvider } from "./context/appmode";

const App = () => {
  return (
    <AppProvider>
      <div className="appwrapper">
        <div>
          <Nav />
          <Outlet />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
