import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllTasks, CompletedTasks, AddNewTask } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "all",
        element: <AllTasks />,
      },
      {
        path: "completed",
        element: <CompletedTasks />,
      },
      {
        path: "add",
        element: <AddNewTask />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
