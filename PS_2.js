
//to list all the food items with category vegetables

const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.category == "Vegetable"
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item);
	});
}
listItem(newArray);
