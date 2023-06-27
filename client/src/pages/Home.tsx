import { Container } from "@nextui-org/react";
import { SignIn, SignUp } from "components/auth";
import { Features, Hero, Navbar, Plans, Testimonials } from "components/home";

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <SignIn />
      <SignUp />
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
    </Container>
  );
};

export default Home;
