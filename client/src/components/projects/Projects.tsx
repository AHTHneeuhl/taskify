import { Container, Grid } from "@nextui-org/react";
import Project from "./Project";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "Develop an online marketplace where users can buy and sell products.",
  },
  {
    title: "Mobile App Development",
    description:
      "Build a mobile application for iOS and Android platforms to provide a seamless user experience.",
  },
  {
    title: "Data Analytics Platform",
    description:
      "Create a platform that enables businesses to analyze and visualize large volumes of data for actionable insights.",
  },
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Grid.Container gap={2}>
        {projects.map(({ title, description }, idx) => (
          <Grid key={idx} xs={4}>
            <Project title={title} description={description} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Projects;
