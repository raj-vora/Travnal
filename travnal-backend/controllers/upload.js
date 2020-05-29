const router = require('express').Router()
var multer = require('multer');
var upload = multer({ storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '../travnal-frontend/src/assets/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.originalname);
        }
    })
}).single('file');


router.post('/', upload, function (req, res) {
    var path = '';

    if (req.file){
        upload(req, res, function (err) {
        if (err) {
        // An error occurred when uploading
            return res.status(422).send("an Error occured");
        }  
        // No error occured.
        path = req.file.filename;
        return res.json({"profile":path}); 
        }); 
    }
});

module.exports = router;