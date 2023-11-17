import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import ComicsList from "./pages/comics/ComicsList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ComicsList />} />
          <Route />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
