import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pages2 from "./pages/Pages2";
import Pages3 from "./pages/Pages3";
import Pages4 from "./pages/Pages4";
import Pages5 from "./pages/Pages5";
import Pages6 from "./pages/Pages6";
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/sejarah1" element={<Pages2 />} />
          <Route path="/sejarah2" element={<Pages3 />} />
          <Route path="/sejarah3" element={<Pages4 />} />
          <Route path="/sejarah4" element={<Pages5 />} />
          <Route path="/sejarah5" element={<Pages6 />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
