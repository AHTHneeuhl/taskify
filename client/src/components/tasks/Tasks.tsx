import { Container, Grid } from "@nextui-org/react";
import Task from "./Task";

const tasks = [
  {
    title: "Implement User Authentication",
    description:
      "Set up a user authentication system to handle user registration, login, and password management.",
  },
  {
    title: "Design UI Mockups",
    description:
      "Create visual mockups and wireframes for the user interface of the application.",
  },
  {
    title: "Optimize Database Queries",
    description:
      "Improve the performance of database queries by optimizing indexes and restructuring queries.",
  },
];

const Tasks: React.FC = () => {
  return (
    <Container>
      <Grid.Container gap={2}>
        {tasks.map(({ title, description }, idx) => (
          <Grid key={idx} xs={4}>
            <Task title={title} description={description} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Tasks;
