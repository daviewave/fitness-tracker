// imports
const router = require("express").Router();
const db = require("../models/exercise");

// get all workouts
router.get("/api/workouts", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get workout range
router.get("/api/workouts/range", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// post/add workout
router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// put/update workout (finding by id)
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Export API routes
module.exports = router;
