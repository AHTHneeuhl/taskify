import { Container, Grid } from "@nextui-org/react";
import Team from "./Team";

const teams = [
  {
    title: "Development Team",
    description:
      "The Development Team is responsible for designing, developing, and maintaining the company's software applications.",
  },
  {
    title: "Marketing Team",
    description:
      "The Marketing Team is responsible for promoting the company's products and services through various channels, such as digital marketing, social media, and advertising campaigns.",
  },
  {
    title: "Sales Team",
    description:
      "The Sales Team is responsible for identifying and acquiring new customers, building relationships with clients, and achieving sales targets.",
  },
];

const Teams: React.FC = () => {
  return (
    <Container>
      <Grid.Container gap={2}>
        {teams.map(({ title, description }, idx) => (
          <Grid key={idx} xs={4}>
            <Team title={title} description={description} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Teams;
