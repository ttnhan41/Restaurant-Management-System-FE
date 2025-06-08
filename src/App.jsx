import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  HomeLayout,
  Error,
  Menu,
  MenuItemDetail,
  Reservation,
  ManagerDashboard,
  Account,
  LoginRegister,
  EditProfilePage,
  OrderListPage,
  ReservationListPage,
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
        path: "user",
        children: [
          {
            path: "edit-profile",
            element: <EditProfilePage />,
          },
          {
            path: "order-list",
            element: <OrderListPage />,
          },
          {
            path: "reservation-list",
            element: <ReservationListPage />,
          },
        ],
      },
      {
        path: "manager",
        element: <ManagerDashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
