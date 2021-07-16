const form = document.querySelector('.form');
const dd = document.querySelector('#day');
const mm = document.querySelector('#month');
const yr = document.querySelector('#year');
const gender = document.querySelector('#gender');

console.log(dd);

//form.addEventListener('submit', (e);

console.log("2");

//Responsive Form


// Validate the day,month and year
function validateData (e) 
{
    
if(dd<=0 || dd>31)
{
  var  err="Incorrect date";
}
else if (mm<=o || mm>12) 
{
   var err="Incorrect month";
}
else if( yr>2021)
{
    var err="Date in the future";
}
else
{
  var err= "";
}
 if (err!==null) 
 {
     alert(err);
 }

}

console.log("Validation run ok");

//Get the day of the week


let y = yr.toString();
let cc = y.slice(0,2);
let yy = y.slice(2,4);



let d= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7


let day = Math.trunc(d);

//document.getElementById("demo").innerHTML = day;




//Get The Gender Name based on the day value

    //Male names will go here 
    if (gender= "male") 
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

