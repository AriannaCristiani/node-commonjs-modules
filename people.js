const userFullName = require("./name.js");
const userHobbies = require ("./hobbies.js")

function people () {

    const person = {
		...userFullName ('Arianna','Cristiani'),
		...userHobbies ('drawing', 'painting' , 'gardening'),
		
	}
    
    return person
}

module.exports = people