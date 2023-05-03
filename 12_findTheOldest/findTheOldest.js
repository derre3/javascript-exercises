const findTheOldest = function(people) {
    const peopleAges = people.map(person => {
        person.yearOfDeath === undefined 
            ? person.yearOfDeath = (new Date).getFullYear() 
            : false
        return person.yearOfDeath - person.yearOfBirth;
    });   
    return people[peopleAges.indexOf(Math.max(...peopleAges))]
};

// Do not edit below this line
module.exports = findTheOldest;
