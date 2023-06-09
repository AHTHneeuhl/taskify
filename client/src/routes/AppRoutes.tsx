import { applicationRoutes as routes } from "config";
import { AppLayout } from "layouts";
import {
  DashboardPage,
  HomePage,
  ProjectPage,
  TaskPage,
  TeamPage,
} from "pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: routes.pages.home,
    element: <HomePage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: routes.pages.dashboard,
        element: <DashboardPage />,
      },
      {
        path: routes.pages.projects,
        element: <ProjectPage />,
      },
      {
        path: routes.pages.tasks,
        element: <TaskPage />,
      },
      {
        path: routes.pages.teams,
        element: <TeamPage />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
