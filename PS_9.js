
//to list all the food items with calorie below 100
const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.calorie < 100
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item.foodname);
	});
}
listItem(newArray);