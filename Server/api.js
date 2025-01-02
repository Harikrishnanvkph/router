const router = require('express').Router();
// const multerRouter = require("./multer/multerServer");
// const reduxRouter = require("./ReduxOperation/reduxOps.js")
// const lpRouter = require('./LongPolling/LongPolling.js')

// Use multer routes for anything under /multer
// router.use("/multer", multerRouter);
// router.use("/createReduxUser",reduxRouter)
// router.use("/longPolling",lpRouter)

// Basic route for the root path
router.get("/", (req, res) => {
    res.send("Good Morning");
});

module.exports = router;
