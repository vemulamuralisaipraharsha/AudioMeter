const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    test_data: [
        {
            test_id: { type: String, required: true },
            left: [
                {
                    frequency: { type: Number, required: true },
                    decibel: { type: Number, required: true }
                }
            ],
            right: [
                {
                    frequency: { type: Number, required: true },
                    decibel: { type: Number, required: true }
                }
            ]
        }
    ]
}, { timestamps: true });

const User = mongoose.model("Userdata", userSchema);

module.exports = User;
