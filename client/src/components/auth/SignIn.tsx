import { Button, Card, Input, Text } from "@nextui-org/react";
import { signInSchema } from "config";
import { Formik } from "formik";

const initialFormValues = {
  email: "",
  password: "",
};

const SignIn: React.FC = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={() => {}}
      validationSchema={signInSchema}
    >
      {() => (
        <Card>
          <Card.Header>
            <Text>Sign In</Text>
          </Card.Header>
          <Card.Body>
            <Input id="email" name="email" type="email" />
            <Input id="password" name="password" type="password" />
          </Card.Body>
          <Card.Footer>
            <Button>Sign In</Button>
          </Card.Footer>
        </Card>
      )}
    </Formik>
  );
};

export default SignIn;
