const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "How wonderful achievement!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Unbelievable!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "It sounds terrific!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "How wonderful!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is amazing!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "How amazing news!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "It was supposed to happen some day!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "How remarkable!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;