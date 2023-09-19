
//to list all the food items with category dairy
const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.category == "Dairy"
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item.foodname);
	});
}
listItem(newArray);