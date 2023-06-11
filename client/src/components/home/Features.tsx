import { Card, Container, Text } from "@nextui-org/react";

const Features: React.FC = () => {
  return (
    <Container>
      <Card>
        <Text>Task Tracking Made Easy</Text>
        <Text>
          Never lose track of tasks again. With Taskify, you can create tasks,
          assign them to team members, set priorities, and track their status in
          real-time. Get notifications and updates, and ensure nothing falls
          through the cracks.
        </Text>
      </Card>
      <Card>
        <Text>Effortless Project Management</Text>
        <Text>
          Stay on top of your projects with our intuitive project management
          features. Create projects, set deadlines, assign tasks, and monitor
          progress—all in one place. Collaborate seamlessly with your team
          members and keep everyone informed and aligned.
        </Text>
      </Card>
      <Card>
        <Text>Team Collaboration</Text>
        <Text>
          Collaboration has never been simpler. Engage with your team members
          through our built-in communication tools. Share files, exchange ideas,
          and have productive discussions, all within the application. Say
          goodbye to scattered communication channels and keep everything
          centralized.
        </Text>
      </Card>
      <Card>
        <Text>Intuitive User Interface</Text>
        <Text>
          Our user-friendly interface ensures a smooth and seamless experience
          for all users. With a clean design and easy navigation, you'll be up
          and running in no time. No technical expertise required—Taskify is
          designed with simplicity in mind.
        </Text>
      </Card>
      <Card>
        <Text>Real-Time Analytics and Reporting</Text>
        <Text>
          Get valuable insights into your team's performance with our real-time
          analytics and reporting. Monitor progress, identify bottlenecks, and
          make data-driven decisions to optimize your workflow and achieve
          better results.
        </Text>
      </Card>
      <Card>
        <Text>Secure and Reliable</Text>
        <Text>
          Your data is safe with us. We prioritize security and implement
          industry-standard protocols to protect your sensitive information.
          Rest easy knowing that your projects and tasks are securely stored and
          accessible only to authorized users.
        </Text>
      </Card>
      <Card>
        <Text>Mobile Responsive</Text>
        <Text>
          Access your projects and manage tasks on the go. Taskify is fully
          responsive and works seamlessly across all devices, including
          desktops, laptops, tablets, and smartphones. Stay productive wherever
          you are.
        </Text>
      </Card>
      <Card>
        <Text>Start Streamlining Your Workflow Today</Text>
        <Text>
          Join thousands of satisfied users who have revolutionized their
          project and task management experience with Taskify. Sign up now and
          take advantage of our free trial. Unlock the power of efficient
          project management and elevate your productivity to new heights.
        </Text>
      </Card>
    </Container>
  );
};

export default Features;
