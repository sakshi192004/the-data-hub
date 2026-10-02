const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory database
let blogPosts = [];

// Custom logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();

    console.log(`[${req.method}] ${req.url} - ${timestamp}`);

    next();
});

// ========================================
// GET ALL POSTS
// GET /posts
// ========================================

app.get("/posts", (req, res) => {
    res.json(blogPosts);
});

// ========================================
// GET SINGLE POST
// GET /posts/:id
// ========================================

app.get("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const post = blogPosts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    res.json(post);
});

// ========================================
// CREATE NEW POST
// POST /posts
// ========================================

app.post("/posts", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    const newPost = {
        id: blogPosts.length > 0
            ? blogPosts[blogPosts.length - 1].id + 1
            : 1,
        title: title,
        content: content
    };

    blogPosts.push(newPost);

    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });
});

// ========================================
// UPDATE POST
// PUT /posts/:id
// ========================================

app.put("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const postIndex = blogPosts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    blogPosts[postIndex] = {
        id: id,
        title: title,
        content: content
    };

    res.json({
        message: "Post updated successfully",
        post: blogPosts[postIndex]
    });
});

// ========================================
// DELETE POST
// DELETE /posts/:id
// ========================================

app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const postExists = blogPosts.some((post) => post.id === id);

    if (!postExists) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    blogPosts = blogPosts.filter((post) => post.id !== id);

    res.json({
        message: "Post deleted successfully"
    });
});

// ========================================
// MOCK LOGIN
// POST /login
// ========================================

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

    // Mock JWT token for Sprint 09
    const mockToken = "mock-jwt-token-" + Date.now();

    res.json({
        message: "Login successful",
        token: mockToken
    });
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});