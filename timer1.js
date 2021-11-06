
// TIMER 
const args = process.argv;
const alarm = args.slice(2);

for(let i = 0; i < alarm.length; i++){ 
  // --> loops through alarm array
  if (alarm[i] > 0){ 
    // --> excludes negative numbers 
    let beep = alarm[i] * 1000; 
    // sets beep interval to command line arg * 1s (e.g 3 = 3s)
    setTimeout(() => {
      process.stdout.write('beep\n'); 
      // didn't hear sound --> used 'beep' instead
    }, beep);
  }
}

// EDGE CASES
// 1. If no args provided --> ends immediately 
// 2. If negative number provided --> ends immediately 
// 3. If the input is NaN --> ends immediately 




