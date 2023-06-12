import { Container } from "@nextui-org/react";
import { BrandLogo } from "components/common";
import Navigation from "./Navigation";

const Sidebar: React.FC = () => {
  return (
    <Container
      css={{ height: "100vh", backgroundColor: "white", shadow: "$sm" }}
    >
      <BrandLogo />
      <Navigation />
    </Container>
  );
};

export default Sidebar;
