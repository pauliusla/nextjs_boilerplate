import { user } from "./user/queryUser";

const resolvers = {
  Query: {
    user,
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
  },
};

export default resolvers;
