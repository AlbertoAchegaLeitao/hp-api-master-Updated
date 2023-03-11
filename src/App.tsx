import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes/routes";
import { AppProvider } from "./context/appmode";

const App = () => {
  return (
    <AppProvider>
      <div className="appwrapper">
        <Router>
          <div>
            <Nav />
            {routes()}
          </div>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
