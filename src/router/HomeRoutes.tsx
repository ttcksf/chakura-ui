import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: true,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: true,
    children: <Setting />
  }
];
