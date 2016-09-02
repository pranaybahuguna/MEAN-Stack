var express           = require('express');
    app               = express();
    bodyParser        = require('body-parser');
    meetupsController = require('./server/controllers/meetups-controller.js');
    var mongoose      = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo')

var _dirName = "C://Users//pbahuguna//Desktop//MEAN-Stack//MStackIntroSeed";


app.use(bodyParser());

app.get('/', function(req,res){	 
	res.sendfile(_dirName +'/client/views/index.html');
});

app.use('/js', express.static(_dirName + '/client/js'));

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3012, function(){
    console.log('Listening...')
})

 