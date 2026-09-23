/*
Convert the given total seconds into months, days, hours, minutes and seconds.
input: 610 or 3700 or 4327894
output: months: 0, days: 0, hours: 0, minutes: 10, seconds: 10 or months: 0, days: 0, hours: 1, minutes: 1, seconds: 40 or months: 1, days: 0, hours: 12, minutes: 4, seconds: 54
*/
function findDurationUsingMs(totalSeconds){
  let months = Math.floor(totalSeconds / 2592000);
  totalSeconds %= 2592000
    
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
    
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  
  
  let minutes = Math.floor(totalSeconds / 60);
  
  let seconds = totalSeconds % 60;
    
  console.log(`months: ${months}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`)
}

// findDurationUsingMs(610);