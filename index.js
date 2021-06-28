// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = '17500';
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
const milesPerKm = 0.621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof (shuttleName));
console.log(typeof (shuttleSpeedMph));
console.log(typeof (distanceMarsKm));
console.log(typeof (distanceMoonKm));
console.log(typeof (milesPerKm));


// Code your solution to exercises 3 and 4 here:

let milesToMars = distanceMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let dayToMars = hoursToMars / 24;
console.log(shuttleName);
console.log(dayToMars);

// How manys days does it take to get to Mars?
console.log( shuttleName + " will take " + dayToMars + " days to get to Mars.");

// Code your solution to exercise 5 here:
console.log(shuttleName + " will take " + distanceMoonKm + " days to reach the Moon.");
