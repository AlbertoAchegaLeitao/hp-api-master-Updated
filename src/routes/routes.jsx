import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import App from "../App";

const routes = () => {
  return (
    [
      {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/About",
            element: <About />,
          },
          {
            path: "/Contact",
            element: <Contact />,
          },
        ],
      },
    ],
    {
      basename: "/hp-api-master-Updated",
    }
  );
};

export default routes;
