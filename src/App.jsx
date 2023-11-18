import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import Header from "./assets/components/header/Header";

//routes
import Home from "./assets/pages/Home";
import ComicsList from "./assets/pages/comics/ComicsList";
import CharactersList from "./assets/pages/characters/CharactersList";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ComicsList />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
