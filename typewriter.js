const sentence = "hello there from lighthouse labs";

//set initial delay to 0

let delay = 0;

//loop through each character in sentence
//inside loop use setTimeout passing in current delay
//increment delay
//use setTimeout at end to print new line after all characters are printed, using delay

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}

setTimeout(() => {
  //process.stdout.write('\n');
  console.log();
}, delay);