let n = 5,
  string = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
// *****
// ****
// ***
// **
// *

// ---------------------------------
// for (let i = n; i > 0; i--) {
//   // Add spaces before the stars
//   for (let j = n - i; j > 0; j--) {
//     string += " ";
//   }

//   // Add stars for the current row
//   for (let k = i; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// // Print the current row
// console.log(string);
// *****
//  ****
//   ***
//    **
//     *


