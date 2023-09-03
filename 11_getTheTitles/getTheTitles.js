const getTheTitles = function(arrOfObjects) {

    // let newArr = [];
    // for (let i = 0; i < arrOfObjects.length; i++) {
    //     newArr.push(arrOfObjects[i]["title"]);
    // }
    // return newArr;

    return arrOfObjects.map((item) => item["title"]);

};



const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
