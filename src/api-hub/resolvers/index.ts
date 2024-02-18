import { queryResolver } from "./example";

const resolvers = {
  Query: {
    ...queryResolver,
  },
  User: {
    username: () => "John Doe",
  },
};

export { resolvers };
