const express = require ("express");

const locationController = require ("../controller/location");
const mealcontroller = require("../controller/mealtype")
const restaurantController = require ("../controller/restaurant");
const user = require("../controller/user");
const menuController = require("../controller/menu");
const FormData = require('../model/FormData');
const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/mealtype', mealcontroller.getmealtype );
route.get('/restaurant/:locid', restaurantController.getRestaurant);
route.post('/signup',user.postuser);
route.post('/login', user.postlogin);
route.post('/filter',restaurantController.getfilter);
route.get('/restaurants/:id', restaurantController.getRestaurantsById);
route.get('/menuitems/:menuresid',menuController.menuitembyresid);
route.post('/submit-form', async (req, res) => {
    try {
      const { name, email, address, contactNumber } = req.body;
  
      // Create a new instance of the FormData model
      const formData = new FormData({
        name,
        email,
        address,
        contactNumber,
      });
  
      // Save the form data to the database
      await formData.save();
  
      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error saving form data', error);
      res.status(500).json({ message: 'Error saving form data' });
    }
  });



module.exports = route;