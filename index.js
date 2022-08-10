//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
const recipe = {
  dish: "Mole",
  serves: 2,
  ingredients: ["Cinnamon", "Cumin", "Cocoa"],
};
console.log(`- ${recipe.dish}`);
console.log(`- Serves: ${recipe.serves}`);
console.log(`- Ingredients:`);

for (const items of recipe.ingredients) {
  console.log(`-`, items);
}

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
console.log("----------------------------------------");
const books = [
  { title: "harryPotter", author: "J. K. Rowling", alreadyRead: true },

  { title: "elPatron", author: "Saifidean Ammous", alreadyRead: false },

  { title: "after", author: "Stephen King", alreadyRead: false },
];

for (const items of books) {
  console.log(`${items.title} by ${items.author}.`);

  items.alreadyRead
    ? console.log(`You already read "${items.title}" by ${items.author}`)
    : console.log(`You still need to read ${items.title} by ${items.author}`);
}
