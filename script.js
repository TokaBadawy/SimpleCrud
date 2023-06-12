/* turn if to switch */

/*
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/

/* sol  */

/*
let job = "Designer";
let salary = 0;


switch (job) {
  case job = "Manager":
    salary = 8000;
  console.log("salary is 8000");
  break;
  case job = "IT" :
  case job =  "Support":
    salary = 6000;
    console.log("salary is 6000");

    break;
   case job = "Developer" :
    case job = "Designer":
    salary = 7000;
    console.log("salary is 7000");

    break;
    default:
        salary = 4000;
        console.log("salary is 4000");

      
} */

/*var n =prompt('Enter Your Name');
var w = prompt('Enter Your Job');
var y = prompt('Enter Your Age');

document.write(
  "<table border=1 align=center width=300px>" +
    "<tr>" +
    "<td>" +
    "Name" +
    "</td> " +
    "<td>" +
    n +
    "</td> " +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Age" +
    "</td> " +
    "<td>" +
    y +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Work" +
    "</td> " +
    "<td>" +
    w +
    "</td>" +
    "</tr>" +
    "</table>"
);*/

/*
var f =prompt('Enter Num1');
var s = parseInt(prompt('Enter Num2')); 

document.write(`<table align = center border=1><tr>
<td>Num1</td>
<td>Num2</td>
<td>Operation</td>
<td>Result</td>

<tr>
<td>${f}</td>
<td>${s}</td>
<td>Add</td>
<td>${f + s}</td>

</tr>
</table>`)*/


/*stars=["*" , " * *", " *  * *" , " * * * *" , " * * * * * "]
for(let i=0 ; i <5; i++ ){
  document.write(` <table align = center><tr><td>${stars[i]} <br></td></tr></table>`)



}*/




/*
let s = " ";
for(let i=1 ; i <5; i++ ){
   s = s +'*'
  document.write(`${s} <br> `)
}

for(let i=5; i <1; i-- ){
  t = t- '*'
 document.write(`${t} <br> `)
}*/



/* دي غلطططططططططططططططط
var f =prompt('Enter Dgree');
var f = parseInt(f);
var s =prompt('Enter Total');
var s = parseInt(s);


if(f >= 50 ){
  res = f * 100 / s ;
  document.write(  'Your result' + " " + res + " " + "%" + 'Pass');

}else if(f >= 70){
  res = f * 100 / s ;
  document.write(  'Your result' + " " + res + " " + "%" + 'Good');


}else if(f >= 80){
  res = f * 100 / s ;
  document.write(  'Your result' + " " + res + " " + "%" + 'Very Good');


}else if (f >= 100){
  res = f * 100 / s ;
  document.write(  'Your result' + " " + res + " " + "%" + 'Excellent');


}





/*else{
  document.write(  'Your result' + res + 'Good')


}*/







/* tasssssssssssssssssssssssssskk 

/*var f =prompt('Enter shape');*/



/* Lamp code  */
/*let s = " ";
for(let i=1 ; i <5; i++ ){
   s = s +'*'
  document.write(`${s}<br>`)
}
s = " ";
for(let w=5 ; w>=1 ; w--){
 
  for(let k = 1 ; k<=w ; k++){
    s += '*'; 
  }
    document.write(`${s}<br>`)
      s = " ";
     
}*/








/* Calc code
 if(f == "calc"){
  var NUM1 =prompt('Enter Num1');
var NUM2 =prompt('Enter Num2');
 
  var res = NUM1 + NUM2;

 } document.write(`${res}<br>`)

 ;












*/





/*var f =prompt('Enter Num1');
var f = parseInt(f);
var s =prompt('Enter Num2');
var s = parseInt(s);
var opp =prompt('Enter operation');
var res;*/

/*if(opp=='+'){
  res = s + f;
 
}else if(opp=='-'){
  res = f- s;
}else if(opp=='*'){
  res = f* s;
}else{
  res = f/ s;
} document.write(res);*/

/*const sum =(f,s)=> {res = s + f};*/










/*
function sum(){
  let x = parseInt(document.getElementById('num1').value);
  let y  = parseInt(document.getElementById('num2').value);
  let res = alert(x + y);
}

function dec(){
  let x = parseInt(document.getElementById('num1').value);
  let y  = parseInt(document.getElementById('num2').value);
  let res = alert(x - y);
}

function mlti(){
  let x = parseInt(document.getElementById('num1').value);
  let y  = parseInt(document.getElementById('num2').value);
  let res = alert(x* y);
}

function divided(){
  let x = parseInt(document.getElementById('num1').value);
  let y  = parseInt(document.getElementById('num2').value);
  let res = alert(x /y);
}

*/



/*switch(op){
  case "+":
    alert (x + y)
   break;


}*/





























let persons=[
  {
    id:1,
    name:'amina',
    age: 24,
    job: 'engineer',
  }
  ,
  {
    id:2,
    name:'salma',
    age: 24,
    job: 'engineer',
  }
  ,
  {
    id:3,
    name:'ali',
    age: 24,
    job: 'engineer',
  }

  

  /*['sara',24,'engineer'],
  ['salma',24,'engineer'],
  ['ali',24,'engineer']*/ 




];

index();

/*for(let index=0 ;index<names.length; index++){

  document.getElementsByTagName('tbody')[0].innerHTML+=
  `
  <tr>
   <td>${names[index][0]}</td>
   <td>${names[index][1]}</td>
   <td>${names[index][2]}</td>


  </tr>
  
  
  
  `;
}*/


function index(){
  document.getElementsByTagName('tbody')[0].innerHTML = "";
persons.forEach(person => {

  document.getElementsByTagName('tbody')[0].innerHTML+=
  `
  <tr>
   <td>${person.name}</td>
   <td>${person.age}</td>
   <td>${person.job}</td>
   <td><button onclick='show(${person.id})'>Show</button></td>
   <td><button onclick='clr(${person.id})'>Delete</button></td>




  </tr>

  `
  
});

document.getElementById('control').innerHTML = `<button onclick="create()">Create</button>`



}





function create(){
let id = persons.length;
 let name = document.getElementById('name').value;
 let age = document.getElementById('age').value;
 let job = document.getElementById('job').value;
 let data = {
  id:id , 
  name:name,
  age:age,
  job:job

 }
 persons.push(data);
 index();




}





function show(id){

  persons.forEach(person => {

     if(person.id == id){
      document.getElementById('name').value = person.name;
      document.getElementById('age').value = person.age;
      document.getElementById('job').value = person.job;
     }

    
  });

  document.getElementById('control').innerHTML = `<button onclick="update(${id})">Update</button>`






}

;





function update(id){
 let NewPersons = persons;
  persons = [];
  NewPersons.forEach((person) => {
    if(person.id != id){
      persons.push(person);
    }



  });

  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let job = document.getElementById('job').value;
  let data = {
   id:id , 
   name:name,
   age:age,
   job:job
 
  }
  persons.push(data);

  index();

}

;





function clr(id){
 let NewPersons = persons;
  persons = [];
  NewPersons.forEach((person) => {
    if(person.id != id){
      persons.push(person);
    }



  });

   index();
}

;











































