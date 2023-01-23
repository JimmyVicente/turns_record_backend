var express = require('express');
var router = express.Router();
var TurnsContoller  = require('../controllers/turns_contoller');
var Init  = require('../controllers/init');

router.get("/list/agency/", TurnsContoller.list_agency);
router.get("/list/city", TurnsContoller.list_city);
router.get("/list/service", TurnsContoller.list_service);


router.get("/sync/base", Init.init);




module.exports = router;
