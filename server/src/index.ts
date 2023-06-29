import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema";

const PORT = Number(process.env.PORT) || 8080;

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(PORT, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}/graphql`);
});
