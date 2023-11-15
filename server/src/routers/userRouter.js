const express = require("express");
const multer  = require('multer')
const {getHomeData, updateHeading, getHomeServices, addHomeServices, addContact, getContact, getBestService, addBestService, updateHomeServices, deleteHomeServices } = require("../controllers/homeCtrl");


const router=express.Router();

// router.put('/',updateHeading)
router.get('/',getHomeData)
router.put('/', updateHeading)
router.get('/services', getHomeServices)
router.post('/services', addHomeServices)
router.get('/we-do-best', getBestService)
router.post('/we-do-best', addBestService)
router.post('/contact', addContact)
router.get('/contact', getContact)
router.put("/services/:id",updateHomeServices)
router.delete("/services/:id",deleteHomeServices)
module.exports={
    router
};