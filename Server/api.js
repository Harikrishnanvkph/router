const router = require('express').Router();
const multerRouter = require("./multer/multerServer");

// Use multer routes for anything under /multer
router.use("/multer", multerRouter);


// Basic route for the root path
router.get("/", (req, res) => {
    res.send("Good Morning");
});

module.exports = router;
