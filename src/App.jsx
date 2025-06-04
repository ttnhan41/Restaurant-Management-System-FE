import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  HomeLayout,
  Register,
  Login,
  Error,
  Menu,
  MenuItemDetail,
  Reservation,
  ManagerDashboard,
  ManagerMenuItemList,
  ManagerOrderList,
  ManagerTableList,
  ManagerReservationList,
  Account,
} from "./pages";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:id",
        element: <MenuItemDetail />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "manager",
        element: <ManagerDashboard />,
        children: [
          {
            path: "menu-item-list",
            element: <ManagerMenuItemList />,
          },
          {
            path: "order-list",
            element: <ManagerOrderList />,
          },
          {
            path: "table-list",
            element: <ManagerTableList />,
          },
          {
            path: "reservation-list",
            element: <ManagerReservationList />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
