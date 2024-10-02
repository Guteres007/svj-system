import { IsAuthLoader } from "@frontend/loaders/IsAuthLoader";
import { IsLoggedInLoader } from "@frontend/loaders/IsLoggedInLoader";
import DashboardPage from "@frontend/pages/DashboardPage";
import FindMyHousesPage from "@frontend/pages/FindMyHousesPage";
import FindMyHousesResultPage from "@frontend/pages/FindMyHousesResultPage";
import LoginPage from "@frontend/pages/LoginPage";
import RegisterPage from "@frontend/pages/RegisterPage";
import AuthTemplate from "@frontend/templates/AuthTemplate";
import PublicTemplate from "@frontend/templates/PublicTemplate";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicTemplate />,
    children: [
      {
        path: "/",
        element: (
          <div style={{ backgroundColor: "red", display: "block" }}>
            Hello world!
          </div>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader: () => IsLoggedInLoader(),
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <AuthTemplate />,
    loader: () => IsAuthLoader(),
    children: [
      {
        path: "/moje-domy/:houseId/dashboard",
        element: <DashboardPage />,
      },

      {
        path: "/moje-domy/vyhledat",
        element: <FindMyHousesPage />,
      },

      {
        path: "/moje-domy/vyhledek-hledani/:searchId",
        element: <FindMyHousesResultPage />,
      },
    ],
  },
]);
