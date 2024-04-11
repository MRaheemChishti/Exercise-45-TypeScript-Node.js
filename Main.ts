// Assignment 1 (Installation)
// Install Node.js, TypeScript and VS Code on your computer. Are Complete
console.log("Assigment 1 (Installation Complete)");

// Assignment 2 (Personal Message)
console.log("\nAssignment 2 (Personal Message)")
let PersonName: string= "M Raheem Chishti";
console.log(`Hello ${PersonName}, Would you like to learn some python toady?`);

// Assignment 3 (Name Cases)
console.log("\nAssignment 3 (Name Cases)")
//lower case
let Person_Name: String = "M Raheem Chishti";
console.log("lowercase:", Person_Name.toLowerCase());

//upper case
console.log("uppercase:", Person_Name.toUpperCase());

//title case
console.log("titlecase:", Person_Name.replace(/\bw/g,c => c.toUpperCase()));

// Assignment 4 (Famouse Quote)
console.log("\nAssignment 4 (Famouse Quote)")
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein "
console.log(`${author} Once Said, "${quote}"`)

// Assignment 5 (Famouse Quote 2)
console.log("\nAssignment 5 (Famouse Quote)")
let Quote: string = "A person who never made a mistake never tried anything new.";
let famous_person = "Albert Einstein";
let message= `${famous_person} once said, ${quote}`;
console.log(message);

// Assignment 6 (Stripping Names)
console.log("\nAssignment 6 (Stripping Names)")
let personName: string = `\n\t M Raheem Chishti \t\n`;
console.log(PersonName);
let stripped: string = PersonName.trim();
console.log(stripped); 

// Assignment 7/8 (Number Eight)
console.log("\nAssignment 7/8 (Number Eight)")
console.log(6 + 2);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);

// Assignment 9 (Favorite Number)
console.log("\nAssignment 9 (Favorite Number)")
let fevoriteNumber: number = 6;
console.log(`My Favorite Number Is ${fevoriteNumber}`);

// Assignment 10 (Adding Comments)
console.log("\nAssignment 10 (Adding Comments)")
// (Program 1)
//My Name Is M Raheem Chishti
//Dated 7/3/2024
//This Program Will Rum Simple Code Just Like Hi My Name Is Muhammad Raheem Chishti
console.log('Hi My Name Is Muhammad Raheem Chishti')

// (Program 2)
//My Name Is M Raheem Chishti
//Dated 7/3/2024
//This Program will Multiplication
const num1 = 5
const num2 = 3
const Sum = num1 * num2
console.log(Sum);

// Assignment 11 (Names)
console.log("\nAssignment 11 (Names)")
let members: string[] =[`Ahad`, `Hamza`, `Arbaz`, `Armaghan`];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}

// Assignment 12 (Greetings)
console.log("\nAssignment 12 (Greetings)")
// let members: string[] =[`Ahad`, `Hamza`, `Arbaz`, `Armaghan`];
let Message: string = "You Are My Best Friend";
for(let i=0; i<members.length; i++){
    console.log(Message +" "+ members[i]);
}

// Assignment 13 (Your Own Array)
console.log("\nAssignment 13 (Your Own Array)")
let transportation: string [] = [`Civic`, `Bike`, `Bus`, `Suzuki`];
for(let i=0; i<transportation.length; i++){
    console.log(`i Would like to own a ` + transportation[i])
}

// Assignment 14 (Guest List)
console.log("\nAssignment 14 (Guest List)")
let Guest_List: string [] = [`Arbaz`,`Daniyal`,`Hamza`,`Armghan`,`Ahad`];
for(let i=0; i<Guest_List.length; i++){
    console.log(`Respected Sir` +" "+ Guest_List[i] + `,\nWe Invited You An Dinner Tomorrow.\nThank You\n`)
}
export{Guest_List}

// Assignment 15 (Changing Guest List)
console.log("\nAssignment 15 (Changing Guest List)")
let not_present: string = `Daniyal`;
let new_guest: string = `Muneeb`;
Guest_List[1] = new_guest; 
for(let i=0; i<Guest_List.length; i++){
    console.log(`Respected Sir` +" "+ Guest_List[i] + `,\nWe Invited You An Dinner Tomorrow.\nThank You\n`)
}
console.log(`Mr. ${not_present} Will Not Coming Tomorrow Dinner.`)

// Assignment 16 (More Guests)
console.log("\nAssignment 16 (More Guests)")
Guest_List.unshift(`Shahid`,`Wasey`,`Anas`);
for(let i=0; i<Guest_List.length; i++){
    console.log(`Respected Sir` +" "+ Guest_List[i] + `,\nWe Invited You An Dinner Tomorrow. We Found Big Table Wo We Decide To Invite 3 More Guest\nThank You\n`)
}

// Assignment 17 (Shrinking Guest List)
console.log("\nAssignment 17 (Shrinking Guest List)")
console.log(`Unfortunately We Can Not Arrange Big Table, Only Two People Allow.`);
while(Guest_List.length>2){
    let remove_guest = Guest_List.pop();
    console.log(`Sorry, ${remove_guest} You Are Not Invited For Dinner.`);
}
for(let i=0; i<Guest_List.length; i++){
    console.log(`Respected Sir` +" "+ Guest_List[i] + `,\nWe Invited You An Dinner Tomorrow. We Found Big Table Wo We Decide To Invite 3 More Guest\nThank You\n`)
}
Guest_List.splice(0,2)
console.log(Guest_List)

// Assignment 18 (Seeing The World)
console.log("\nAssignment 18 (Seeing The World)")
let Places: string [] = [`Istanbul`, `Dubai`, `Karbala`, `Bursa`, `Ankara`]
// console.log(`original: ` + Places);

// //Print your array in alphabetical order without modifying the actual list.
console.log(`Copy: ` + [...Places].sort());

// //Show that your array is still in its original order by printing it.
console.log(`original: ` + Places);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Copy: ` + [...Places].sort().reverse());

//  Show that your array is still in its original order by printing it again.
console.log(`Copy: ` + [...Places].sort().reverse());

//Reverse the order of your list. Print the array to show that its order has changed.
console.log(`original: ` + Places.sort());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Copy: ` + [...Places].sort().reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log(`original: ` + Places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`original: ` + Places.sort().reverse());

// Assignment 19 (Dinner Guests)
console.log("\nAssignment 19 (Dinner Guest)")
console.log('PRINTING NUMBER OF GUEST INVITED')
console.log(`We Had Finally Invited ${Guest_List.length} From Excercise 14`)

// Assignment 20 (Think Of Something You Could Store In A Array)
console.log("\nAssignment 20 (Think Of Something You Could Store In A Array)")
let Cities: string [] = ['Karachi', 'Lahore', 'Islamabad', 'Multan', 'Faislabad', 'Hyderabad']
console.log("List of Cities:")
for(let Top of Cities){
    console.log(Top)
}

// Assignment 21 (They Think Of Something You Could Store In A TypeScript Object)
console.log("\nAssignment 21 (They Think Of Something You Could Store In A TypeScript Object)")
interface item {
    Name: string
    Cost: number
}
// Create two ojects
const Book: item = {
    Name: 'ESSENTIAL TYPESCRIPT',
    Cost: 630
}
const Ai: item = {
    Name: 'Artificial Intelligence: A Modern Approach',
    Cost: 400
}
console.log(`Book Name: ${Book.Name}, \nPrice: $${Book.Cost} \n`)
console.log(`Ai Book Name: ${Ai.Name}, \nPrice: $${Ai.Cost} \n`)

// Assignment 22 (Intentional Error)
console.log("\nAssignment 22 (Intentional Error)")
let arry: ( string | number ) [] = ['Ahad', 'Arbaz', 3, 5, 6, "Ramsha"]
console.log( arry [5] );
console.log( arry [0] );
console.log( arry [3] );
console.log( arry [1] );
console.log( arry [2] );

// Assignment 23 (Conditional Tests)
console.log("\nAssignment 23 (Conditional Tests)")
let car: string = 'subaru';

// Test 1: Equality Comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Strict Equality Comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 3: Inequality Comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

// Test 4: Strict Inequality Comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 5: Less Than Comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru');

// Test 6: Greater Than Comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru');

// Test 7: Less Than or Equal Comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');

// Test 8: Greater Than or Equal Comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');

//Test 9: Checking Truthiness (True)
console.log("Is car? I predict True.");
console.log(car);

//Test 10: Checking Falsiness (False)
console.log("Is car? I predict True.");
console.log(!car);

// Assignment 24 (More Condtitional Tests)
console.log("\nAssignment 24 (More Conditional Tests)")
import { Console, count } from "console";

let name1: string = "Muhammad Raheem Chishti";
let name2: string = "M Raheem Chisti";
let name3: string = "mr. raheem chishti";
let age1: number = 23
let num_1: number = 20
let Country: string [] = ["Pakistan", "India", "Turkey", "China", "Dubai"]


//Test 1: Equality
console.log("1) Name1 == Muhammad Raheem Chishti?")
if (name1 == "Muhammad Raheem Chishti") {
    console.log("True (Name Are Equal)")
}
else{
    console.log("False (Name Are Not Equal)")
}
//Test 2: Inequality
console.log("2) Name1 != Muhammad Raheem Chishti?")
if (name2 != "Muhammad Raheem Chishti" ){
    console.log("True (Name Are Not Equal)")
}
else {
    console.log("False (Name Are Equal)")
}

//Test 3: Lower Case
console.log("3) Name3 Is In Lower Case?")
if (name3 == name3.toLowerCase()) {
    console.log("True (Name3 Is In Lower Case)")
}
else {
    console.log("False (Name3 Isn`t In Lower Case)")
}

// Numerical Test
// Equality & Inequality
console.log("4) age1 == 23?")
if (age1 == 23) {
    console.log("True")
}
else{
    console.log("False")
}

console.log("5) age1 != 22?")
if (age1 != 23) {
    console.log("True")
}
else{
    console.log("False")
}

//Greater Then & Less Then
console.log("6) num1 > 22?")
if (num_1 > 22) {
    console.log("True")
}
else{
    console.log("False")
}

console.log("7) num1 < 22?")
if (num_1 < 22) {
    console.log("True")
}
else{
    console.log("False")
}

//greater than or equal to, and less than or equal to
console.log("8) num1 => 22?")
if (num_1 >= 22) {
    console.log("True")
}
else{
    console.log("False")
}

console.log("9) num1 <= 22?")
if (num_1 <= 22) {
    console.log("True")
}
else{
    console.log("False")
}

//AND and OR Operator
console.log("10) num1 > 22 && num1 < 30 ?")
if (num_1 > 22 && num_1 < 30) {
    console.log("True")
}
else{
    console.log("False")
}

console.log("11) num1 > 22 || num1 < 30 ?")
if (num_1 > 30 || num_1 < 21) {
    console.log("True")
}
else{
    console.log("False")
}

//item is in a array
console.log("12) Pakistan Is In Country List?")
if (Country.includes("Pakistan")) {
    console.log("Yes Pakistan Is In Country List")
}
else{
    console.log("No Pakistan Is Not In Country List")
}

// item is not in a array
console.log("12) England Is In Country List?")
if (Country.includes("England")) {
    console.log("Yes England Is In Country List")
}
else{
    console.log("No England Is Not In Country List")
}

// Assignment 25 (Alien Colors #1)
console.log("\nAssignment 25 (Alien Colors #1)")
// Create a variable called alien_color
let AlienColor: string = "Green";

// Write an if statement to test whether the alien’s color is green. 
//If it is, print a message that the player just earned 5 points.
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points.");
}

//Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
AlienColor = "Red";
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points.");
}

// Assignment 26 (Alien Colors #2)
console.log("\nAssignment 26 (Alien Colors #2)")
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points For Shooting The Alien.");
} else {
    console.log("TThe Player Just Earned 10 Points. ")
}
AlienColor = "Yellow"
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points For Shooting The Alien.");
}

// Assignment 27 (Alien Colors #3)
console.log("\nAssignment 27 (Alien Colors #3)")
//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// let AlienColor: string = "Green";

// // If the alien’s color is green, 
// //print a statement that the player just earned 5 points for shooting the alien.
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points.");
}
else if (AlienColor == "Yellow"){
    console.log("The Player Just Earned 10 Points.")
}

else if(AlienColor == "Red") {
    console.log("The Player Just Earned 15 Points.");
}
else {
    console.log("Please Select Right Color.")
}

//Program 2

AlienColor = "Yellow";
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points.");
}
else if (AlienColor == "Yellow"){
    console.log("The Player Just Earned 10 Points.")
}

else if(AlienColor == "Red") {
    console.log("The Player Just Earned 15 Points.");
}
else {
    console.log("Please Select Right Color.")
}

//Program 3

AlienColor = "Red";
if(AlienColor == "Green") {
    console.log("The Player Just Earned 5 Points.");
}
else if (AlienColor == "Yellow"){
    console.log("The Player Just Earned 10 Points.")
}

else if(AlienColor == "Red") {
    console.log("The Player Just Earned 15 Points.");
}
else {
    console.log("Please Select Right Color.")
}

// Assignment 28 (Stage Of Life)
console.log("\nAssignment 28 (Stage Of Life)")
let age: number = 25;

if (age < 2){
    console.log("The Person is a baby.")
}

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age <= 4) {
    console.log("The Person is a toddler.")
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age <= 13) {
    console.log("The Person is a Kid.")
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age <= 20) {
    console.log("The Person is a Teenager.")
}

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age <= 65) {
    console.log("The Person is a Adult.")
}

// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("The Person is a Elder.")
}

// Assignment 29 (Favorite Fruit)
console.log("\nAssignment 29 (Favoorite Fruit)")
let favorite_fruits: string[] = ['Apple', 'Mango', 'Bananas']

if (favorite_fruits.includes('Apple')){ 
    console.log('I really like Apple!')
} 
if (favorite_fruits.includes('Mango')){ 
    console.log('I really like Mango')
}
if (favorite_fruits.includes('Bananas')){ 
    console.log('I really like Bananas')
}
if (favorite_fruits.includes('Grapes')){ 
    console.log('I really like Grapes')
}
if (favorite_fruits.includes('Orange')){ 
    console.log('I really like Orange')
}

// Assignment 30 (Hello Admin)
console.log("\nAssignment 30 (Hellow Admin)")
let users: string [] = ['Raheem', 'Arbaz', 'Ahad', 'Ramsha', 'Admin']

for (let user of users) {
    if (user === "Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user}, Thank you for logging in again.`)
    }
}

// Assignment 31 (No Users)
console.log("\nAssignment 31 (No Users)")
if (users.length === 0){
    console.log("We need to find some users!")
}

// • Remove all of the usernames from your array, and make sure the correct message is printed.
else{
    users = [];
    console.log("All user have been removed " + users.length)
} 

// Assignment 32 (Checking Username)
console.log("\nAssignment 32 (Checking Username)")
let current_users: string [] = ["Ahad", "Arbaz", "Ramsha", "Raheem", "Admin"];
let new_users: string [] = ["Armaghan", "Arbaz", "Daniyal", "Ahad", "Wasey"];

new_users.forEach((newUsers) => {
    if (
        current_users.some(
            (currentUsers) => currentUsers.toLowerCase() === newUsers.toLowerCase()
        )
    ) {
        console.log(`${newUsers} will need to enter a new username.`);
    } else {
        console.log(`${newUsers} is available.`);
    }
}
);

// Assignment 33 (Orddinal Numbers)
console.log("\nAssignment 33 (Ordinal Numbers)")
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] == 1) {
        console.log(`${myNumbers[i]}st`);
    } else if(myNumbers[i] == 2) {
        console.log(`${myNumbers[i]}nd`);
    } else if(myNumbers[i] == 3) {
        console.log(`${myNumbers[i]}rd`);
    } else if(myNumbers[i] >= 4 && myNumbers[i] <= 9) {
        console.log(`${myNumbers[i]}th`);
    }
}

// Assignment 34 (Pizzas)
console.log("\nAssignment 34 (Pizzas)")
let myPizza = ["Fegita Pizza", "Afghani Pizza", "Bar BQ Pizza"];

for (let i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}

for (let i = 0; i < myPizza.length; i++) {
    console.log(`I like to eat ${myPizza[i]}`);
}

console.log(`\nPizza is my ultimate comfort food, with its gooey cheese and tasty toppings. 
Every bite brings pure satisfaction and joy to my taste buds. 
It's a timeless classic that I'll never get tired of enjoying.`);

// Assignment 35 (Animals)
console.log("\nAssignment 35 (Animals)")
let animal: string [] = ["Cat", "Dog", "Tiger"];

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}

for (let i = 0; i < animal.length; i++) {
    console.log( `I Like ${animal[i]} as a pet.`);
}

console.log("\n All This pets make wonderful companions, offering loyalty, affection, and endless joy to their owners")

// Assignment 36 (T-Shirt)
console.log("\nAssignment 36 (T-Shirts)")
function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}

make_shirt("small", "Kindness is the language of the heart")

// Assignment 37 (Large Shirts)
console.log("\nAssignment 37 (Large Shirts)")
function make_Shirt(size: string = "large", message: string = "I Love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}

make_Shirt();
make_Shirt("medium");
make_Shirt("small", "Dive into Coding")

// Assignment 38 (Cities)
console.log("\nAssignment 38 (Cities)")
function describe_city(nameOfCity: string, country: string = "Pakistan"){
    return `${nameOfCity} is in ${country}`;
}

let city1 = describe_city("Karachi");
let city2 = describe_city("Delhi", "India");
let city3 = describe_city("Tokyo", "Japan");
let city4 = describe_city("Hyderabad")

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

// Assignment 39 (City Names)
console.log("\nAssignment 39 (City Names)")
function city_country(city: string, country: string){
    return `${city}, ${country}`
}

let mycities = city_country("Karachi", "Pakistan");
let mycities2 = city_country("Landon", "United Kingdom");
let mycities3 = city_country("Istanbul", "Turkye");

console.log(mycities)
console.log(mycities2)
console.log(mycities3)

// Assignment 40 (Album)
console.log("\nAssignment 40 (Album)")
function make_album(artistName: string, albumTitle: string) {
    return{artistName, albumTitle}
}

let album1 = make_album("Ali", "Tu Ishq Mera");
let album2 = make_album("Atif", "Rang Tere Ishq Ka");
let album3 = make_album("Haider", "Dil-e-Nadan");

console.log(album1);
console.log(album2);
console.log(album3);

//Number of Tracks
function make_album2(artistName: string, albumTitle: string, NumberOfTracks: number) {
    return{artistName, albumTitle, NumberOfTracks}
}

let album4 = make_album2("Rahat", "Tu Na Aya", 20);
let album5 = make_album2("Raftar", "Tera Suroor", 30);
let album6 = make_album2("Bilal", "Tere Ishq Mai", 50);

console.log(album4);
console.log(album5);
console.log(album6);


// Assignment 41 (Magicians)
console.log("\nAssignment 41 (Magicians)")
function show_magicians(Magicians: string[]): void{

    for (const Magician of Magicians){
        console.log(Magician.charAt(0).toUpperCase() + Magician.slice(1));
    }
}

const Magician: string [] = ["Ubaid", "Shakoor", "Muqdas"];
show_magicians(Magician)

// Assignment 42 (Great Magicians)
console.log("\nAssignment 42 (Great Magicians)")
function make_great(Magicians: string[]): void{
    for (let i = 0; i < Magicians.length; i++){
        Magicians[i] = Magicians[i]   + ' The Great'
    }
}
const Magician2: string [] = ["Ubaid", "Shakoor", "Muqdas"];
make_great(Magician2)
show_magicians(Magician2)

// Assignment 43 (Unchanged Magicians)
console.log("\nAssignment 43 (Unchanged Magicians)")
function make_great2(Magicians: string[]) : string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < Magicians.length; i++){
        greatMagicians.push(Magicians[i] + ' The Geat');
    }
    return greatMagicians;
}
 const Magician3: string [] = ["Ubaid", "Shakoor", "Muqdas"];

 const greatMagicians2: string[] = make_great2(Magician3);
 show_magicians(Magician3);;
 show_magicians(greatMagicians2);

// Assignment 44 (Sandwiches)
console.log("\nAssignment 44 (Sandwiches)")
function sandwich(...items: string[]): void {
    console.log("Sandwich Order:")
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy your sandwich M Raheem Chishti")

sandwich('capsisum', 'tomato', 'chicken')
sandwich('beef', 'cheese')
sandwich('garlic', 'chicken', 'mayo sauce')

// Assignment 45 (Cars)
console.log("\nAssignment 45 (Cars)")
type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar: car = createCar("toyota", "corolla", {color: "Silver", year: "2024"})
console.log(mycar)
