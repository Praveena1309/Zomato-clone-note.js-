const Restaurant = require ("../model/menu");

exports.menuitembyresid = (req, res) => {
    const {menuresid} = req.params;
    Restaurant.find({restaurantId:menuresid},{})
    .then(response =>{
        res.status(200).json({
            message:"menuitems by resturant id  Fetched Successfully",
            restaurants : response})
        })
    .catch(err => {
            res.status(500).json({ error:err })
        })   
}