import { Container } from "@nextui-org/react";
import { Features, Hero, Navbar, Plans, Testimonials } from "components/home";

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
    </Container>
  );
};

export default Home;
