let test_flag = false;
let userdata = {
    "name":"",
    "age":""
}
let uid = "";

function setFlag(data) {
    test_flag = data;
}

function setDetails(name,age) {
    userdata.name = name;
    userdata.age = age;
}

function setUid(id){
    uid = id;
}


function getFlag() {
    return test_flag;
}


function getDetails() {
    return userdata;
}

function getUid(id){
    return uid;
}

module.exports = {
    setFlag,
    getFlag,
    setDetails,
    getDetails,
    setUid,
    getUid,
};
