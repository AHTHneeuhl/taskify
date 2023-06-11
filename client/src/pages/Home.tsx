import { Container } from "@nextui-org/react";
import { Features, Hero, Testimonials } from "components/home";
import Plans from "components/home/Plans";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
    </Container>
  );
};

export default Home;
