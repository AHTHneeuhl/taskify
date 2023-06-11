import { Container, Text } from "@nextui-org/react";
import { navigation } from "config";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Container>
      {navigation.map(({ label, path }) => (
        <NavLink key={label} to={path}>
          <Text>{label}</Text>
        </NavLink>
      ))}
    </Container>
  );
};

export default Navigation;
