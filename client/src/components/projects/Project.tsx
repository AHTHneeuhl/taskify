import { Card, Text } from "@nextui-org/react";

type TProps = {
  title: string;
  description: string;
};

const Project: React.FC<TProps> = ({ title, description }) => {
  return (
    <Card>
      <Card.Header>
        <Text>{title}</Text>
      </Card.Header>
      <Card.Body>
        <Text>{description}</Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
