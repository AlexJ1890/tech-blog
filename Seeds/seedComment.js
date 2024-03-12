const { Comment } = require("../models");

const commentData = [
  {
    content: "I agree",
    post_id: 1,
    user_id: 3,
  },
  {
    content: "I disagree with you",
    post_id: 2,
    user_id: 3,
  },
  {
    content: "this is a comment",
    post_id: 3,
    user_id: 2,
  },
  {
    content: "random comment",
    post_id: 4,
    user_id: 1,
  },
  {
    content: "Yes this is another comment",
    post_id: 5,
    user_id: 1,
  },
];

const seedComment = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComment;
