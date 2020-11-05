const apiController = require("../controller/apiController");

const routes = [
    {
        method: 'GET',
        url: '/apitest',
        handler:  apiController.apiTest
    },
    {
        method: 'GET',
        url: '/apitest/asd',
        handler: apiController.apiTestAsd
    },
    {
        method: 'GET',
        url: '/apitest/dsa',
        handler: apiController.apiTestDsa
    },
    {
        method: 'POST',
        url: '/apitest/test',
        handler: apiController.apiTestTest
    }
];

module.exports = routes;