const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: { type: String, required: "type is required" },
            name: { type: String, required: "name is required" },
            duration: { type: Number, required: "duration is required" },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number }
        }]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

