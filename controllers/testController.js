const flag_data = require("../globals");


const getTest = (req, res) => {
    res.render("test");
    //After everything has completed in the test.ejs, write a .js file to perform DOM.item.click()
    //This has to be done in the front end 
}

const getTestResult = (req, res) => {
    res.render("testResult");
}

module.exports = {
    getTest,
    getTestResult,
};