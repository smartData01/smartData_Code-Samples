'use strict';

const userController = require('../controllers/user');
const Joi = require('joi')
/*
 * Defining routes to be used in server.js
*/
module.exports = [{
    method: 'Post',
    path: '/addUser',

    config: {
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        },
        handler: userController.addUser,
        description: 'Get todo',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'] // ADD THIS TAG
        
    }
},{
    method: 'Get',
    path: '/scores',
    config: {
        handler: userController.getAllScores,
        description: 'Get todo',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'], // ADD THIS TAG
    }
},{
    method: 'Get',
    path: '/scores/reset',
    config: {
        handler: userController.resetScores,
        description: 'Get todo',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'], // ADD THIS TAG
    }
}
,{
    method: 'Post',
    path: '/scores/add',
    config: {
        handler: userController.addNewScore,
        description: 'Get todo',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'], // ADD THIS TAG
    }
}
];