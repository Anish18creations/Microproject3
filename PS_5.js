
//list all the food items with category nuts
const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.category == "Nuts"
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item);
	});
}
listItem(newArray);
