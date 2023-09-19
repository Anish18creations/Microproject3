
//to list all the food items with lowest cab content to highest
const food = require('./food.json');

food.sort((a, b) => a.cab - b.cab);

food.forEach((item) => {
    console.log(item.foodname);
});