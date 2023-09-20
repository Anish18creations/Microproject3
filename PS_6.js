
//to list all the food items with category grains
const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.category == "Grain"
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item);
	});
}
listItem(newArray);
