import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import YouthCinemaProject from "./pages/YouthCinemaProject";

export default function App() {
  return (
    <div className="film-grain">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/the-youth-cinema-project"
          element={<YouthCinemaProject />}
        />
      </Routes>
    </div>
  );
}
