import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        {routes()}
      </div>
    </Router>
  );
};

export default App;
