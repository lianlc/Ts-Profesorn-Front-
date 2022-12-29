import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
