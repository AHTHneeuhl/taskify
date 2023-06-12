import { Grid } from "@nextui-org/react";
import { Sidebar } from "components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <Grid.Container>
      <Grid xs={1}>
        <Sidebar />
      </Grid>
      <Grid xs={11}>
        <Outlet />
      </Grid>
    </Grid.Container>
  );
};

export default AppLayout;
