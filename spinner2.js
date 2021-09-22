//loop through the array and print it twice
const spinner = ["\r|","\r/","\r-","\r\\"]

let time = 0;
for(const char of spinner) {
  time += 200
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
}
for(const char of spinner) {
  time += 200
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
}

// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);

//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);

//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
//   }, 700);
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 900);
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 1100);

//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 1300);

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
//   }, 1500);
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 1700);

