
let n=1;
function appendData(){

var firstName=document.getElementById("firstname").value;
console.log(firstName)
var lastName=document.getElementById("lastname").value;
console.log(lastName)
var address=document.getElementById("address").value;
console.log(address)
var pincode=document.getElementById("pincode").value;
console.log(pincode)
var genderSelection=document.getElementById("genderselection").value;
console.log(genderSelection)


var food="";
var foodCount=0;


if(document.getElementById("Chicken Burger").checked==true)
{
     food=food+document.getElementById("Chicken Burger").value+",";
    foodCount++
    
} 
if(document.getElementById("Fish briyani").checked==true)
{
     food=food+document.getElementById("Fish briyani").value+","
    foodCount++
}
if(document.getElementById("Veg Burger").checked===true)
{
    food=food+document.getElementById("Veg Burger").value+","
    foodCount++
}
if(document.getElementById("Veg Noodles").checked===true)
{
    food=food+document.getElementById("Veg Noodles").value+","
    foodCount++
}
if(document.getElementById("Veg Pizza").checked===true)
{
   food=food+document.getElementById("Veg Pizza").value
   foodCount++
}
console.log(food)
console.log(foodCount)


var state=document.getElementById("state").value;
var country=document.getElementById("country").value; 
console.log(country)


  let table_output = document.getElementById('getTable')
    let newRow = table_output.insertRow(n)

   

if(firstName&&lastName&&address&&pincode&&genderSelection&&food&&(foodCount>=2)&& state&&country)
{
  
    let cell1=newRow.insertCell(0)
    cell1.textContent=firstName
    let cell2=newRow.insertCell(1)
    cell2.textContent=lastName
    let cell3=newRow.insertCell(2)
    cell3.textContent=address
    let cell4=newRow.insertCell(3)
    cell4.textContent=pincode
    let cell5=newRow.insertCell(4)
    cell5.textContent=genderSelection
    let cell6=newRow.insertCell(5)
    cell6.textContent=food
    let cell7=newRow.insertCell(6)
    cell7.textContent=state
    let cell8=newRow.insertCell(7)
    cell8.textContent=country

    
}

else if( foodCount<2)
{
    alert("Choose minimum 2 food");
    return false;
}
else 
{  
    alert("fill the details");
    return false;
}


var form = document.getElementById("forms")
form.reset();
}

