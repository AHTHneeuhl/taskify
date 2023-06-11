import { applicationRoutes as routes } from "config";

const navigation = [
  {
    label: "Dashboard",
    path: routes.pages.dashboard,
  },
  {
    label: "Tasks",
    path: routes.pages.tasks,
  },
  {
    label: "Projects",
    path: routes.pages.projects,
  },
  {
    label: "Teams",
    path: routes.pages.teams,
  },
];

export default navigation;
