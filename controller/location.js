const Location = require ("../model/location(local db)");

exports.getLocation = (req, res) => {
   // res.status(200).json({message:"Locations Fetched Successfully", location: Location})

   Location.find({}, {})
        .then(response => {
            res.status(200).json({
                message:"Locations Fetched Successfully", 
                location: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}