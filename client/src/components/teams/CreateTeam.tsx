import { Button, Card, Input, Text } from "@nextui-org/react";
import { createTeamValidation } from "config";
import { Formik } from "formik";

const formInitialValues = {
  title: "",
  description: "",
  category: "",
  members: [],
};

const CreateTeam: React.FC = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={() => {}}
      validationSchema={createTeamValidation}
    >
      <Card as="form">
        <Card.Header>
          <Text>Create Team</Text>
        </Card.Header>
        <Card.Body>
          <Input id="title" name="title" label="Title" placeholder="Title" />
          <Input
            id="category"
            name="category"
            label="Category"
            placeholder="Category"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Description"
          />
        </Card.Body>
        <Card.Footer>
          <Button>Create Team</Button>
        </Card.Footer>
      </Card>
    </Formik>
  );
};

export default CreateTeam;
