
const express=require('express');
const route=express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/",services.homeRoutes);


/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/newstudent",services.newstudent);

route.get("/addstudent",services.homeRoutes);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/updates",services.updates);

route.get("/addstudent",services.homeRoutes);

//API
route.post('/api/E-learning',controller.create);
route.get('/api/E-learning',controller.find);
route.put('/api/E-learning/:id',controller.update);
route.delete('/api/E-learning/:id',controller.delete);


module.exports=route