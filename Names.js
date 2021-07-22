//Receive Inputs
function getInputVals()
{
    
    const dd = document.getElementById("day").value;
    const mm = document.getElementById("month").value;
    const yr = document.getElementById("year").value;

    //get the value of the gender radio buttons
   const gender= document.querySelector('input[name="gender"]:checked').value;
       // const gender= document.getElementById("gender").value; 
    
    

console.log( +dd+ "/"+mm+"/"+yr+ " "+ gender);


//Check if all input fields have been entered
if (dd== "") {
    alert("The day field cannot be empty");
    return false;
}
if (mm=="") {
    alert("The month field cannot be empty");
    return false;
}
if (yr== "") {
    alert("The Year field cannot be empty");
    return false;
}
if  (gender== "") {
    alert("The gender field cannot be empty");
    return false;
}

//Validate the inputs
if(dd<=0 || dd>31)
{
  var  err="The day of the month " + dd + " is incorrect";
}
else if (mm<= 0|| mm>12) 
{
   var err="The month number " + mm + " is incorrect";
}
else if( yr>2021)
{
    var err="The year you entered " + yr +" is in the future!";
}
else
{
  var err= "";
}

//Display the error if there is one
 if (err!= "") 
 {
     alert(err);
     console.log(err);
     return
 }


//If here, there is a low chance we might have an error.


//Get the day of the week based on the input values that we have
let y = yr.toString();
let cc = y.slice(0,2);
let yy = y.slice(2,4);



let d= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

//The day might be returned as a floating point value so we need to truncate it.
let day = Math.trunc(d);

console.log(day)



//Get The Gender Name based on the day value

    //Male names will go here 
    if (gender== "male") 
    {
    switch (day) {
        case 0:
        dayName="Kwasi"; 
            break;
        case 1:
        dayName="Kwadwo"; 
             break;    
        case 2:
         dayName="Kwabena";
            break;
        case 3:
         dayName="Kwaku";
            break; 
        case 4:
        dayName="Yaw";
            break;
        case 5:
        dayName ="Kofi";
            break
        case 6:
        dayName="Kwame"
            break;
    }
    console.log(dayName)
    }  

  
    //Gender is female and the names will go here 
   else
    {
        switch (day) {
            case 0:
            dayName="Akosua"; 
                break;
            case 1:
            dayName="Adwoa"; 
                 break;    
            case 2:
             dayName="Abenaa";
                break;
            case 3:
             dayName="Akua";
                break; 
            case 4:
            dayName="Yaa";
                break;
            case 5:
            dayName ="Afua";
                break
            case 6:
            dayName="Ama"
                break;

    }
}
console.log(dayName);
switch (day) {
    case 0:
    day="Sunday"; 
        break;
    case 1:
    day="Monday"; 
         break;    
    case 2:
     day="Tuesday";
        break;
    case 3:
     day="Wednesday";
        break; 
    case 4:
    day="Thursday";
        break;
    case 5:
    day ="Friday";
        break
    case 6:
    day="Sunday"
        break;
}
console.log(day);

var genderName= "Your Gender Name is " + dayName + " and your Birthday falls on a " + day



// Display the Name
document.getElementById("output").innerHTML= genderName
}
