const { User } = require("../models");

const userData = [
  {
    name: "jim60",
    email: "jimemail@email.com",
    password: "jimbob1",
  },
  {
    name: "janet",
    email: "janetemail@email.com",
    password: "dammitjanet123",
  },
  {
    name: "steve",
    email: "steveemail@email.com",
    password: "jimbob123",
  },
  {
    name: "James",
    email: "jamesemail@email.com",
    password: "jimbob324",
  },
];

const seedUser = async () => {
  await User.bulkCreate(userData, {
    individualHooks:true
  });
};

module.exports = seedUser;
