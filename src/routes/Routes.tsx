import { RouteObject } from "react-router-dom";
import { LoginScreen } from "../features/login/LoginScreen";
import WineScreen from "../features/wine/WineScreen";

export const Routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/wines",
    element: <WineScreen />,
  },
];
