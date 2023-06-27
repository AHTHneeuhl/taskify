import { Button, Navbar, Text } from "@nextui-org/react";
import { useSignInModal, useSignUpModal } from "hooks/auth";

const App: React.FC = () => {
  const { onOpen: onOpenSignUpModal } = useSignUpModal();
  const { onOpen: onOpenSignInModal } = useSignInModal();

  return (
    <Navbar isBordered variant="floating" maxWidth="fluid">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Taskify
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#features">
          Features
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#testimonials">Testimonials</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" onPress={onOpenSignInModal}>
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat onPress={onOpenSignUpModal}>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default App;
