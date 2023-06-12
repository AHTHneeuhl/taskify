import { Button, Card, Input, Text } from "@nextui-org/react";
import { createProjectValidation } from "config";
import { Formik } from "formik";

const formInitialValues = {
  title: "",
  description: "",
};

const CreateProject: React.FC = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={() => {}}
      validationSchema={createProjectValidation}
    >
      <Card as="form">
        <Card.Header>
          <Text>Create Project</Text>
        </Card.Header>
        <Card.Body>
          <Input label="Title" placeholder="Title" />
          <Input label="Description" placeholder="Description" />
        </Card.Body>
        <Card.Footer>
          <Button>Create Project</Button>
        </Card.Footer>
      </Card>
    </Formik>
  );
};

export default CreateProject;
