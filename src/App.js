import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pages2 from "./pages/Pages2";
import Pages3 from "./pages/Pages3";
import Pages4 from "./pages/Pages4";
import Pages5 from "./pages/Pages5";
import Pages6 from "./pages/Pages6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sejarah-pembentukan-bpupki" element={<Pages2 />} />
          <Route path="/sejarah-pembentukan-ppki" element={<Pages3 />} />
          <Route
            path="/sejarah-pengeboman-hiroshimadannagasaki"
            element={<Pages4 />}
          />
          <Route
            path="/sejarah-peristiwa-rengasdengklok"
            element={<Pages5 />}
          />
          <Route
            path="/sejarah-penyusunan-naskahproklamasi"
            element={<Pages6 />}
          />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
