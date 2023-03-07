import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes/routes";

const App = () => {
  return (
    <div className="appwrapper">
      <Router>
        <div>
          <Nav />
          {routes()}
        </div>
      </Router>
    </div>
  );
};

export default App;
