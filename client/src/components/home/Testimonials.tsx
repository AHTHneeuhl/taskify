import { Card, Container, Grid, Text } from "@nextui-org/react";

const Testimonials: React.FC = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$8",
        justifyContent: "center",
        alignItems: "center",
        padding: "$16 0",
      }}
    >
      <Text
        h2
        css={{
          textAlign: "center",
        }}
      >
        See what our satisfied customers have to say about Taskify
      </Text>
      <Grid.Container gap={2}>
        <Grid xs={6}>
          <Card
            css={{
              padding: "$8",
            }}
          >
            <Text>
              "Since implementing Taskify, our project management has become
              much more organized and efficient. We can now easily track tasks,
              communicate with team members, and stay on top of deadlines.
              Highly recommended!"
            </Text>
            <Text css={{ textAlign: "end" }}>John D. Project Manager</Text>
          </Card>
        </Grid>
        <Grid xs={6}>
          <Card
            css={{
              padding: "$8",
            }}
          >
            <Text>
              "I love how intuitive and user-friendly Taskify is. It has
              simplified my project management process and allowed me to focus
              on what really matters—delivering high-quality results to my
              clients."
            </Text>
            <Text css={{ textAlign: "end" }}>Sarah P. Freelancer</Text>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Testimonials;
