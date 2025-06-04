import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  HomeLayout,
  Error,
  Menu,
  MenuItemDetail,
  Reservation,
  ManagerDashboard,
  ManagerMenuItemList,
  ManagerOrderList,
  ManagerTableList,
  ManagerReservationList,
  ManagerUserList,
  Account,
  LoginRegister,
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
        path: "login-register",
        element: <LoginRegister />,
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
        //element: <ManagerDashboard />,
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
          {
            path: "user-list",
            element: <ManagerUserList />,
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
