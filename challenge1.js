/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
    const name = "Your Name"; // Replace "Your Name" with your actual name
    console.log(name);
  }
  
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(printAge) {
    const age = 2023- 1985();
    console.log("Your age is: " + age);
  }
  

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {

    return "en"
      console.log('Hello ' + name);
     
     return  "es";
     console.log ('Hola ' + name );
     return  "fr"
     console.log ('Bonjou ' + name );

     return "tr";
     console.log ('merhaba ' + name );
   
  }
  
  // Call the function with name and language parameters
  printHello('John', 'en'); // Output: Hello John
  printHello('Maria', 'es'); // Output: Hola Maria
  printHello('Pierre', 'fr'); // Output: Bonjour Pierre
  printHello('Ali', 'tr'); // Output: Merhaba Ali
  printHello('Adam', 'de'); // Output: Invalid language
  function printHello(name, language) {
    return (name , language);
   console.log ('John', 'en');
   console.log ('Maria', 'es');
   console.log ('Pierre', 'fr');
   console.log ('Ali', 'tr');
   console.log ('Adam', 'de');


  
  // Example usage
  printHello('John', 'en');  // Output: Hello John
  printHello('Maria', 'es'); // Output: Hola Maria
  printHello('Pierre', 'fr'); // Output: Bonjour Pierre
  printHello('Ahmet', 'tr'); // Output: Merhaba Ahmet
  
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
    const maxNumber = math.maxNumber(num1, num2);
    console.log("The bigger number is: " + maxNumber);
  }
  