let n = 5,
  string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let str = "* ";
//   let space = "  ";
//   console.log(space.repeat((n - 1)) + str.repeat(i));
// }
