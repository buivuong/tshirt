var express = require('express');
var app = express();

var compress = require('compression');
app.use(compress({
	threshold : 0, // or whatever you want the lower threshold to be
	 filter    : function(req, res) {
	    var ct = res.get('content-type');
	    return true;
	 }
}));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  	extended: true
}));

var cors = require('cors');
app.use(cors());

var knex = require('knex')({
  	client: 'mysql',
  	connection: {
    	host     : '127.0.0.1',
    	user     : 'root',
    	password : '',
    	database : 'meditek'
  	}
});

app.post('/eform/create', function(req, res){
	knex('eform').insert({name: req.body.name})
	.then(function(data){
		res.json({data: data})
	})
});

app.post('/eform/list', function(req, res){
	knex.select('*')
	.from('eform')
	.then(function(data){
		res.json({data: data})
	})
});

app.listen(4001, function(){
	console.log('Listen on 4001');
})