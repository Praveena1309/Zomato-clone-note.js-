const mealtype = require ("../model/mealtype");

exports.getmealtype = (req, res) => {
   // res.status(200).json({message:"Locations Fetched Successfully", location: Location})

   mealtype.find({}, {})
        .then(response => {
            res.status(200).json({
                message:"meal type Fetched Successfully", 
                mealtype: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}