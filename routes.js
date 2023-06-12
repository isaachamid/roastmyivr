const express = require('express');
const router  = express.Router();
const ivrController = require('./controllers/ivr');

router.get('/', ivrController.index);
router.post('/ivr/start', ivrController.start);
router.get('/ivr/:ivrId', ivrController.getReport);
router.patch('/ivr/:ivrId/terminate', ivrController.terminate);
router.patch('/ivr/:ivrId/cancel-retry', ivrController.cancelRetry);

module.exports = router;