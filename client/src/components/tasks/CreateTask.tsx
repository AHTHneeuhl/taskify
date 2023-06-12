import { Button, Card, Input, Text } from "@nextui-org/react";
import { createTaskValidation } from "config";
import { Formik } from "formik";

const formInitialValues = {
  title: "",
  description: "",
};

const CreateTask: React.FC = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={() => {}}
      validationSchema={createTaskValidation}
    >
      <Card as="form">
        <Card.Header>
          <Text>Create Task</Text>
        </Card.Header>
        <Card.Body>
          <Input label="Title" placeholder="Title" />
          <Input label="Description" placeholder="Description" />
        </Card.Body>
        <Card.Footer>
          <Button>Create Task</Button>
        </Card.Footer>
      </Card>
    </Formik>
  );
};

export default CreateTask;
