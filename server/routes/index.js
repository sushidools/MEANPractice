const router = require('express').Router();
const apiRouter = require('express').Router();

const authRoutes = require('./auth.routes');

const catchAll = require('./catch-all.routes');

router.use('/auth', authRoutes);

module.exports = apiRouter.use('/api', router).use(catchAll);