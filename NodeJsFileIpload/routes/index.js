var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile('./views/fileupload.html');
});
router.post('/upload', function (req, res, next) {
    //console.log(req.files[0]);
    //res.redirect("/show?photo=" + req.files[0].filename);
});

router.get('/show', function (req, res, next) {
    var imgurl = req.param("photo");
    res.send("<html><body><img src=" + "../uploads/" + imgurl + "></body></html>");

});
module.exports = router;
