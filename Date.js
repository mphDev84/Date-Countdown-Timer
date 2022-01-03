function myFunction() {

    let x = document.querySelector("#myDate");
    let defaultVal = x.defaultValue;
    let currentVal = x.value; //get user's chosen date
    
    if (defaultVal == currentVal) {//test user input
      document.getElementById("demo").innerHTML = "Default value and current value is the same: "
      + x.defaultValue + " and " + x.value
      + "<br>Change the value of the date field to your chosen date to start the countdown!";
    } else {
      document.getElementById("demo").innerHTML = "Counting down from: " + currentVal;
    }
    console.log(currentVal); 

let oldDate2 = new Date(currentVal);//make a new date object from user's chosen date
let dateNow = new Date();//make a new date object from "today"
let oldDate = new Date(oldDate2.toDateString()+' ' +"24:00");//this was necessary to fix a bug in the calculated dates
console.log(oldDate);
function dateCountDown(oldDate){
    
    //calcualate time difference between dates
     const days = ((oldDate-dateNow)/1000/60/60/24);
     const myFloor = Math.floor(days);
     const hrs=(days*24)-(Math.floor(myFloor)*24);  
     const mins=(hrs*60)-(Math.floor(hrs)*60);
     const secs = (mins*60)-(Math.floor(mins)*60);

     //display the time, broken down into hrs, mins etc
 document.querySelector("#div1").innerHTML=(myFloor);
   document.querySelector("#div2").innerHTML=(Math.floor(hrs));
   document.querySelector("#div3").innerHTML=(Math.floor(mins));
   document.querySelector("#div4").innerHTML=(secs.toFixed(0));
  subtractTimeFromDate(oldDate, 1); //call function to set coundown timer
     
function subtractTimeFromDate(objDate, intSecs) {

//change display of element "wrapper"
document.querySelector("#wrapper").style.visibility = "visible";
//add CSS animation class to div elements
let a = document.querySelector("#div1");
a.classList.add("text-focus-in");
let b = document.querySelector("#div2");
b.classList.add("text-focus-in");
let c = document.querySelector("#div3");
c.classList.add("text-focus-in");
let d = document.querySelector("#div4");
d.classList.add("text-focus-in");

         var numberOfMlSeconds = objDate.getTime();
         var addMlSeconds = (intSecs )  * 1000;//set the countdown timer interval value (i.e. by seconds)
         var newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
      
         return newDateObj;
     }
     let newDate = subtractTimeFromDate(oldDate, 1);
     if(newDate>dateNow){
         setTimeout(dateCountDown, 1000, newDate);
     }
     };
     
     setTimeout(dateCountDown, 1000, oldDate);

  }
  function reLoadWindow(){ //reload window to refresh timer
    window.location.reload();
 }
