import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import { signUpSchema } from "config";
import { useFormik } from "formik";
import { useSignUp, useSignUpModal } from "hooks/auth";
import Mail from "./Mail";
import Password from "./Password";

const SignUp: React.FC = () => {
  const { isOpen, onClose } = useSignUpModal();
  const { handleSignUp } = useSignUp();

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      handleSignUp(values);
      actions.resetForm();
    },
  });

  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Text b size={18}>
            Taskify
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body as="form" onSubmit={() => handleSubmit()}>
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
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
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
          aria-label="Password"
          placeholder="Password"
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
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={onClose}>
          Close
        </Button>
        <Button auto type="submit" onPress={onClose}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
