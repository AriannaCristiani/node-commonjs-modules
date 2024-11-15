const userFullName = require("./name.js");
const hobbies = require ("./hobbies.js")

function people () {
    return {userFullName, hobbies}
}

module.exports = people