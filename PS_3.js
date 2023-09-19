
//to list all the food items with category fruit
const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.category == "Fruit"
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item.foodname);
	});
}
listItem(newArray);