const userFullName = require("./name.js");
const userHobbies = require ("./hobbies.js")

function people () {
    const {firstName, lastName} = userFullName
    const {hobbies}= userHobbies
    
    return {firstName, lastName, hobbies}
}

module.exports = people