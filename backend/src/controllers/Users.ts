import User from "../types/user";

export default {
  // TODO: Return actual users
  async getUsers(): Promise<User[]> {
    return [{
      name: "User 1",
      mentorGroup: "401",
    },
      {
        name: "User 2",
        mentorGroup: "405",
      }
    ];
  }
};
