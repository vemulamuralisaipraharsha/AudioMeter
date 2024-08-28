const User = require("../models/userdata");
const global_data = require("../globals");
const { uid } = require('uid');


const getInput = (req, res) => {
    res.render("input");
}

const postInput = (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    global_data.setDetails(name,age);
    var id = uid();
    console.log(`[LOG: POST REQ TYPE:INPUT] ${name} ${age} ${id}`);
    const user = new User({
        uid: id,
        name: name,
        age: age
    });
    let flag_data = true;
    global_data.setFlag(flag_data);
    global_data.setUid(id);
    user.save()
        .then(() => {
            res.redirect("test");
        })
        .catch(() => {
            console.log(err);
        });
}

module.exports = {
    getInput,
    postInput
}