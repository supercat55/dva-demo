module.exports = {
  "GET /api/posts": { posts: [1, 2] },
  "/api/users/1": { id: 1 },
  "POST /api/users/create": (req, res) => {
    res.end("ok");
  }
};
