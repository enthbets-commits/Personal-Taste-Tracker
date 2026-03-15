// Personal Taste Tracker

console.log("Taste Tracker Running");


// Problem 1: Create an array of your favorite foods
let myFavoriteFoods = ["pizza", "tacos", "burgers", "sushi", "pasta"];


// Problem 2: Create an array of popular foods
let popularFoods = [
"pizza","burger","taco","sushi","pasta","ramen","steak","fried chicken","ice cream","mac and cheese",
"hot dog","sandwich","salad","lasagna","nachos","dumplings","curry","pad thai","pho","pancakes",
"waffles","donuts","chocolate","cheesecake","apple pie","fish and chips","grilled cheese","burrito","quesadilla","falafel",
"hummus","shawarma","lobster","crab","shrimp","clams","oysters","risotto","gnocchi","spaghetti",
"meatballs","bbq ribs","cornbread","chili","soup","potatoes","fried rice","egg rolls","spring rolls","mochi"
];


// Problem 3: Log the number of favorite foods
console.log("Number of favorite foods:", myFavoriteFoods.length);


// Problem 4: Loop through favorite foods
console.log("My Favorite Foods:");
for (let i = 0; i < myFavoriteFoods.length; i++) {
    console.log(myFavoriteFoods[i]);
}


// Problem 5: Loop through popular foods
console.log("Popular Foods:");
for (let i = 0; i < popularFoods.length; i++) {
    console.log(popularFoods[i]);
}


// Problem 6: Function to check if a food is your favorite
function checkFavorite(food) {
    if (myFavoriteFoods.includes(food)) {
        console.log(food + " is one of my favorite foods!");
    } else {
        console.log(food + " is not one of my favorite foods.");
    }
}


// Problem 7: Call the function
checkFavorite("pizza");
checkFavorite("ramen");


// Problem 8: Compare array lengths
if (myFavoriteFoods.length > popularFoods.length) {
    console.log("I have more favorite foods than the popular list.");
} else {
    console.log("The popular food list is larger.");
}


// Problem 9: Find foods that appear in both arrays
console.log("Foods I like that are also popular:");
for (let i = 0; i < myFavoriteFoods.length; i++) {
    if (popularFoods.includes(myFavoriteFoods[i])) {
        console.log(myFavoriteFoods[i]);
    }
}


// Problem 10: Add a new favorite food
myFavoriteFoods.push("ice cream");
console.log("Updated Favorite Foods:", myFavoriteFoods);

console.log("Taste Tracker Complete");