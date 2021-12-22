const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "ENTER THE NAME OF THE EXERCISE YOU WOULD LIKE TO ADD: ",
      },
      type: {
        type: String,
        trim: true,
        required: "ENTER THE TYPE OF EXERCISE YOU ARE ADDING: ",
      },
      duration: {
        type: Number,
        required:
          "ENTER THE DURATION (IN MINUTES) OF THE EXERCISE YOU ARE ADDING: ",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
