const { Post } = require('../models');

const postData = [
    {
        title: "'Real' programing is an elitist myth!",
        post_content: "When people build a database to manage reading lists or feed their neighbors, that’s coding—and culture.",
        user_id: 3
    },
    {
        title: "Researchers' algorithm designs soft robots that sense!",
        post_content: "Deep-learning technique optimizes the arrangement of sensors on a robot's body to ensure efficient operation.",
        user_id: 1
    },
    {
        title: "Classic math conundrum solved: Superb algorithm for finding the shortest route!",
        post_content: "One of the most classic algorithmic problems deals with calculating the shortest path between two points. A more complicated variant of the problem is when the route traverses a changing network - whether this be a road network or the internet. For 40 years, an algorithm has been sought to provide an optimal solution to this problem. Now, computer scientist have come up with a recipe.",
        user_id: 2

    },
    {
        title: "Solving 'barren plateaus' is the key to quantum machine learning!",
        post_content: "Many machine learning algorithms on quantum computers suffer from the dreaded 'barren plateau' of unsolvability, where they run into dead ends on optimization problems.",
        user_id: 5
    },
    {
        title: "Using artificial intelligence to generate 3D holograms in real-time!",
        post_content: "Researchers have developed a way to produce holograms almost instantly. The deep learning-based method is so efficient, it could run on a smartphone, they say.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;