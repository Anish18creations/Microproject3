
//to list all the food items with highest protien content to lowest
const food = require('./food.json');

food.sort((a, b) => b.protiens - a.protiens);

food.forEach((item) => {
    console.log(item.foodname);
});