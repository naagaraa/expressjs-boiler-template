const userService = {
  getAllUsers: async (req, res) => {
    const user = [
      {
        api: "version 1",
        id: 1,
        name: "John",
        age: 30,
        city: "New York",
        country: "USA",
      },
      {
        api: "version 1",
        id: 2,
        name: "Yuki",
        age: 30,
        city: "Tokyo",
        country: "JPN",
      },
    ];

    res.json(user);
  },
  getUserById: async (req, res) => {
    const user = [
      {
        api: "version 1",
        id: 1,
        name: "John",
        age: 30,
        city: "New York",
        country: "USA",
      },
      {
        api: "version 1",
        id: 2,
        name: "Yuki",
        age: 30,
        city: "Tokyo",
        country: "JPN",
      },
    ];

    res.json(user[req.params.id - 1]);
  },
};

module.exports = userService;
