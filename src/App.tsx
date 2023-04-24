
import Home from "./screens/Home";
import PictureFeed from "./screens/PictureFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//function that opens camera and takes a picture


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camara" element={<PictureFeed />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
