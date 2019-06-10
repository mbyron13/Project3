
// const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    var streets = [
      {
        id: 1,
        name: "Main Street",
        lat: -70,
        lng: 70,
      },
      {
        id: 2,
        name: "Zen Street",
        lat: -100,
        lng: 68,
      },
      {
        id: 3,
        name: "South Street",
        lat: 43,
        lng: 55
      }
    ]
    res.json(streets);
    // db.Street.find({
    //   include: [db.Street],
    //   order: [
    //     ["name", "ASC"]
    //   ]
    // })
    //   .then(dbStreet => res.json(dbStreet))
    //   .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    // db.Street.findById(req.params.id)
    //   .then(dbStreet => res.json(dbStreet))
    //   .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.query);
    // var newStreet = JSON.parse(res);
    // streets.push(newStreet);

  }
  
};
