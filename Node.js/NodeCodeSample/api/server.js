const Hapi = require('hapi');
const Routes = require('../routes/user');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const DB = require('../db');
const corsHeaders = require('hapi-cors-headers')
const pgk = require('../package');

const options = {
	'basePath': 'http://172.24.3.0:3000',
	host: '172.24.3.0:8000',
	info: {
        'title': 'Test API Documentation',
	validatorUrl: false,
        'version': pgk.version,

    }
};

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host:'0.0.0.0'
	port: 8000,
	routes: { cors: true } 
});

// Add the routes

//server.route(Routes);
server.ext('onPreResponse', corsHeaders);

server.register([
	Inert,
	Vision,
	{
	    'register': HapiSwagger,
	    'options': options
	}], (err) => {
	    server.start((err) => {
		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);
	});
});

server.route(Routes);


// Start the server

