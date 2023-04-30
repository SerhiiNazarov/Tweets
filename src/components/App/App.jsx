import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Tweets from "../../pages/Tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
