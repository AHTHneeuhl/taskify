import { Container, Text } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <Container
      fluid
      css={{
        height: "72vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        h1
        weight="bold"
        color="primary"
        css={{
          textAlign: "center",
        }}
      >
        Welcome to the Taskify
      </Text>
      <Text h4 color="link" css={{ textAlign: "center" }}>
        the all-in-one solution for managing your tasks, projects and teams
      </Text>
    </Container>
  );
};

export default Hero;
