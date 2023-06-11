import { Card, Container, Text } from "@nextui-org/react";

const Testimonials: React.FC = () => {
  return (
    <Container>
      <Text>See what our satisfied customers have to say about Taskify</Text>
      <Card>
        "Since implementing Taskify, our project management has become much more
        organized and efficient. We can now easily track tasks, communicate with
        team members, and stay on top of deadlines. Highly recommended!" - John
        D., Project Manager
      </Card>
      <Card>
        "I love how intuitive and user-friendly Taskify is. It has simplified my
        project management process and allowed me to focus on what really
        matters—delivering high-quality results to my clients." - Sarah P.,
        Freelancer
      </Card>
    </Container>
  );
};

export default Testimonials;
