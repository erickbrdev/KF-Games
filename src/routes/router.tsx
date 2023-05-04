import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import InfoGames from "../components/InfoGames";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/games/:userId",
    element: <InfoGames/>
  }
]);
