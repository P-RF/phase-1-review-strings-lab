// Write your code in this file!
// Define 'currentUser'
const currentUser = 'Pri';

// 'welcomeMessage' contains "Welcome to Flatbook, "
// 'welcomeMessage' contains 'currentUser' name
// welcomeMessage contains an exclamation point
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 'excitedWelcomeMessage' contains 'welcomeMessage' capitalized
// 'excitedWelcomeMessage' contains 'currentUser' variable
// ends with an exclamation point
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 'shortGreeting' contains 'welcomeMessage' lower cased
// 'shortGreeting' contians first initial of the name stored in the 'currentUser' variable
// ends with an exclamation point
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
