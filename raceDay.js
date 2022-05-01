// Race Day
// You have been hired to write a program that will register runners for a race and give them instructions on race day. All adults will race in the morning and all people under 18 will race in the afternoon. Follow the instructions below to develop the logic for the program!

//Assign random race number

let raceNumber = Math.floor(Math.random() * 1000);

//Did the entrant register before race day
const isRegisteredEarly = false;

//define racer's age for race time determination
let runnersAge = 18;

//if registered ahead provide number between 0-1000, if not provide number between 1001-2000
if(runnersAge > 18 && registeredEarly === true){
    raceNumber += 1000;
    console.log("Adult");
}

// runners over 18 and did register early
if(runnersAge > 18 && registeredEarly === true){
  console.log(`Your race number is: ${raceNumber} and your time is: 9:30 am`)
  
  // runners over 18 or did register early
} else if(runnersAge > 18 && registeredEarly === false){
  console.log(`Your race time is: 11:00 am, and your race number is: ${raceNumber}`)

  // runners under 18 and did NOT register early
} else if(runnersAge < 18){
  console.log(`you will race at 12:30 pm, and your race number is: ${raceNumber}`)

  // all other options
}else{
  console.log("Please go to registration desk.")
}
