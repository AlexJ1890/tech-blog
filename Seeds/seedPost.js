const { Post } = require("../models");

const postData = [
  {
    title: "bob's burgers'",
    content: "are good",
    user_id: 1,
  },
  {
    title: "big news",
    content: "I'm a turtle",
    user_id: 2,
  },
  {
    title: "pickles?",
    content: "i hate pickles",
    user_id: 3,
  },
  {
    title: "Sweet",
    content: "I eat trash",
    user_id: 3,
  },
  {
    title: "Luffy",
    content: "Help!",
    user_id: 4,
  },
];

const seedPost = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPost;
