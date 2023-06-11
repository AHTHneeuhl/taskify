import { Card, Container, Grid, Text } from "@nextui-org/react";

const Plans: React.FC = () => {
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
        Choose the best plan that suits your needs and budget
      </Text>
      <Grid.Container gap={2}>
        <Grid xs={4}>
          <Card
            css={{
              padding: "$8",
            }}
          >
            <Card.Header>
              <Text
                h4
                css={{
                  textAlign: "center",
                }}
              >
                Starter
              </Text>
            </Card.Header>
            <Card.Body>
              <Text>
                Ideal for individuals and small teams just getting started.
                Enjoy basic project management features at an affordable price.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card
            css={{
              padding: "$8",
            }}
          >
            <Card.Header>
              <Text
                h4
                css={{
                  textAlign: "center",
                }}
              >
                Professional
              </Text>
            </Card.Header>
            <Card.Body>
              <Text>
                Perfect for growing businesses and teams. Unlock advanced
                collaboration tools and enhanced analytics capabilities.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card
            css={{
              padding: "$8",
            }}
          >
            <Card.Header>
              <Text h4>Enterprise</Text>
            </Card.Header>
            <Card.Body>
              <Text>
                Tailored for large organizations with complex project
                requirements. Benefit from enterprise-grade security, custom
                integrations, and dedicated support.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Plans;
