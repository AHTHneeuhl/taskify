import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import { signUpSchema } from "config";
import { Formik } from "formik";
import { useSignUp, useSignUpModal } from "hooks/auth";
import Mail from "./Mail";
import Password from "./Password";

const initialFormValues = {
  fullName: "",
  email: "",
  password: "",
};

const SignUp: React.FC = () => {
  const { isOpen, onClose } = useSignUpModal();
  const { handleSignUp } = useSignUp();

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values) => handleSignUp(values)}
      validationSchema={signUpSchema}
    >
      {({ handleSubmit }) => (
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={isOpen}
          onClose={onClose}
        >
          <form onSubmit={handleSubmit}>
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Welcome to
                <Text b size={18}>
                  Taskify
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                id="fullName"
                name="fullName"
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                aria-label="Full Name"
                placeholder="Full Name"
              />
              <Input
                id="email"
                name="email"
                type="email"
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                aria-label="Email"
                placeholder="Email"
                contentLeft={<Mail />}
              />
              <Input
                id="password"
                name="password"
                type="password"
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                aria-label="Password"
                placeholder="Password"
                contentLeft={<Password />}
              />
              <Row justify="space-between">
                <Checkbox>
                  <Text size={14}>Remember me</Text>
                </Checkbox>
                <Text size={14}>Forgot password?</Text>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={onClose}>
                Close
              </Button>
              <Button auto type="submit" onClick={onClose}>
                Sign Up
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      )}
    </Formik>
  );
};

export default SignUp;
