import { Button, Card, Input, Text } from "@nextui-org/react";
import { signUpSchema } from "config";
import { Formik } from "formik";

const initialFormValues = {
  fullName: "",
  email: "",
  password: "",
};

const SignUp: React.FC = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={() => {}}
      validationSchema={signUpSchema}
    >
      {() => (
        <Card>
          <Card.Header>
            <Text>Sign Up</Text>
          </Card.Header>
          <Card.Body>
            <Input id="fullName" name="fullName" />
            <Input id="email" name="email" type="email" />
            <Input id="password" name="password" type="password" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />
          </Card.Body>
          <Card.Footer>
            <Button>Sign Up</Button>
          </Card.Footer>
        </Card>
      )}
    </Formik>
  );
};

export default SignUp;
