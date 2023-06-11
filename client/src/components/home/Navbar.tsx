import { Button, Navbar, Text, Link } from "@nextui-org/react";

const App: React.FC = () => {
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
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default App;
