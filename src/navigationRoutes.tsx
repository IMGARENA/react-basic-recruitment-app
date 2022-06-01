import { DashboardScreen } from "./screens/Dashboard";
import { SportsScreen } from "./screens/Sports";

type NavigationRoute = {
  path: string;
  element: JSX.Element;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const navigationRoutes: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
  },
};
