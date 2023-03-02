const router = require('express').Router();

// endpoint routing
const adminRouter = require('./admin');
<<<<<<< HEAD
const submissionsRouter = require('./router/submissions.route');
=======
const submissionsRouter = require('./routers/submission.route');
>>>>>>> a6a7e8a4049ce22da1eb6076e251903bd740f42f

router.use('/admin', adminRouter);
router.use('/submissions', submissionsRouter);

module.exports = router;
