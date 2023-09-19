
//to list all the food items
const food = require('./food.json');

function listItem(i) {
	i.forEach((item) => {
		console.log(item.foodname);
	});
}

listItem(food);