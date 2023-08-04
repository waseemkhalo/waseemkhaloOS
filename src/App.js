import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import * as React from "react";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  //add google analytics
  useEffect(() => {
    ReactGA.initialize("G-81EZR7G7KR");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
