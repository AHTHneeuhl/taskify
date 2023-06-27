import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import { signInSchema } from "config";
import { useFormik } from "formik";
import { useSignIn, useSignInModal } from "hooks/auth";
import Mail from "./Mail";
import Password from "./Password";

const SignIn: React.FC = () => {
  const { isOpen, onClose } = useSignInModal();
  const { handleSignIn } = useSignIn();

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values, actions) => {
      handleSignIn(values);
      actions.resetForm();
    },
  });

  return (
    <Modal
      closeButton
      blur
      aria-labelledby="sign-in"
      open={isOpen}
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="sign-in" size={18}>
          Welcome to
          <Text b size={18}>
            Taskify
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body as="form" onSubmit={() => handleSubmit()}>
        <Input
          id="email"
          name="email"
          type="email"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          aria-label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
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
          placeholder="Password"
          aria-label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          contentLeft={<Password />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
        <Button auto type="submit" onPress={onClose}>
          Sign In
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
