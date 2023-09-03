const findTheOldest = function(arr) {

    const max = arr.reduce((acc, current, index) => {

        if (!current.yearOfDeath) {
            const currentDate = new Date();
            current.yearOfDeath = currentDate.getFullYear();

        }
        const currentAge = current.yearOfDeath - current.yearOfBirth;
        const previousAge = acc.yearOfDeath - acc.yearOfBirth;

        if (currentAge > previousAge) {
            return current
        } else {
            return acc
        }

    }, arr[0]);

    return max

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
