// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.'

var likesToTravel = false;
if (likesToTravel === true) {
    console.log("Bon Voyage!")
} else {
    console.log("You gonna love COVID 19")
}

// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.

var favoriteFood = "fried pickles"

if (favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls") {
    console.log("Congratulations you have a great taste!")
} else {
    console.log("Clearly, you have not tried fried pickles or pepperoni rolls.")
}

// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

if ( 1 + 1 > 5) {
    console.log("True!")
} else {
    console.log("LIES")
}

if (4 * 5 <= 20) {
    console.log("True!")
} else {
    console.log("LIES")
}

if (6 - 2 >= 0){
        console.log("True!")
} else {
    console.log("LIES")
}

// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

var likesDogs = true;

if (likesDogs === true) {
    console.log("You're a dog person")
} else {
    console.log("You're a cat person")
}

// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.
var birthYear = 1989;

if (birthYear <= 1965){
    console.log("Okay boomer!")
} else if (birthYear <= 1976) {
    console.log("Gen Xer don't care")
} else if (birthYear <= 1994) {
    console.log("Millenials kill everything!")
} else if (birthYear <= 2020) {
    console.log("You're almost what is wrong with the world - Gen Z")
}

// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

var mariaLang = {
    name: "Maria",
    language: "Spanish"
}
if (mariaLang.language === "Spanish") {
console.log(`Hola, ${mariaLang.name}!`)
} else {
    console.log(`Hello`)
}

// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.

var time = ("7:30 AM");
var isHungry = false;
if (time === "7:30 AM" && isHungry === true){
    console.log("Time for Breakfast")
} else if (time === "12:00 PM" && isHungry === true) {
    console.log("Time for Lunch")
} else if (time === "3:00pm" && isHungry === true) {
    console.log("Tea time!")
} else if (time === "6:00 PM" && isHungry === true){
    console.log("Time for dinner!")
} else {
    console.log("Have a biscuit, Potter")
}

// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

var grade = 87;
if (grade <= 69) {
    console.log("F")
} else if (grade <= 76){
    console.log("D")
} else if (grade <= 84) {
    console.log("C")
} else if (grade <= 92) {
    console.log("B")
} else if (grade <= 100) {
    console.log("A")
}
// If all the high temperatures in the three day forecast are above 85, log, "It's going to be hot as heck all week!" to the console.
// If all of the high temperatures in the three day forecast are below 40, log "It's going to be cold as heck all week!" to the console.
// If any of the low temperatures are below 20, log a sentence about the specific day. (Example: "Wednesday will be cold as heck!")
// If any of the high temperatures are above 95, log a sentence about the specific day. (Example: "Thursday will be hot as heck!")

var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
   if (weatherForecast.length <= 85) {
       console.log("It is going to be cold as heck!")
   } else if (weatherForecast.length >= 86){
       console.log("It is going to be hot as heck!")
   }